require 'addressable/uri'

class Book < ActiveRecord::Base
  attr_accessible :author, :title, :genre, :open_library_id

  validates :author, :title, :presence => true
  validates :title, :uniqueness => {:case_sensitive => false}

  has_many :ratings
  has_many :reviews
end


