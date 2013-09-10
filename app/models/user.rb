require 'bcrypt'
require 'rest-client'

class User < ActiveRecord::Base
  include BCrypt

  attr_accessible :username, :email, :password

  validates :username, :email, :presence => true

  has_many :reviews

  has_many :reviewed_books,
    :through => :reviews,
    :source => :book

  def password=(text_password)
    self.password_hash = Password.create(text_password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
  end

  def verify_password(text_password)
    Password.new(password_hash) == text_password
  end
end
