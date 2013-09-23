require 'bcrypt'
require 'rest-client'

class User < ActiveRecord::Base
  include BCrypt

  attr_accessible :username, :email, :password, :uid, :oauth_token, :oauth_expires_at, :provider

  validates :username, :email, :presence => true

  has_many :reviews
  has_many :reviewed_books,
    :through => :reviews,
    :source => :book

  has_many :book_flags
  has_many :to_read_books,
    :through => :book_flags,
    :source => :book

  def self.from_omniauth(auth) 
    where(auth.slice(:provider, :uid)).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.username = auth.info.username || auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end

  def password=(text_password)
    self.password_hash = Password.create(text_password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save

    self.session_token
  end

  def verify_password(text_password)
    Password.new(password_hash) == text_password
  end
end
