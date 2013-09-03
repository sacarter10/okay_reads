class Book < ActiveRecord::Base
  attr_accessible :author, :title, :genre

  validates :author, :title, :presence => true
end


