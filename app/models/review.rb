class Review < ActiveRecord::Base
  attr_accessible :user_id, :book_id, :rating, :title, :body

  validates :user_id, :book_id, :presence => true
end
