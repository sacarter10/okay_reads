class Review < ActiveRecord::Base
  attr_accessible :user_id, :book_id, :rating, :title, :body

  validates :user_id, :book_id, :presence => true
  validates :user_id, :uniqueness => {:scope => :book_id}

  belongs_to :user
  belongs_to :book
end
