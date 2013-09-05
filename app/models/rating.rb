class Rating < ActiveRecord::Base
  attr_accessible :user_id, :book_id, :stars

  validates :user_id, :book_id, :stars, :presence => true
  validates :user_id, :uniqueness => { :scope => :book_id }

  belongs_to :user
  belongs_to :book
end
