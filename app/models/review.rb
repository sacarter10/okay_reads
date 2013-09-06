class Review < ActiveRecord::Base
  attr_accessible :user_id, :book_id, :rating_id, :title, :body

  validates :user_id, :book_id, :presence => true

  belongs_to :rating
end
