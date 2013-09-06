class Review < ActiveRecord::Base
  attr_accessible :user_id, :book_id, :rating_id, :title, :body

  belongs_to :rating
end
