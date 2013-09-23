class Review < ActiveRecord::Base
  attr_accessible :user_id, :book_id, :rating, :title, :body

  validates :rating, :presence => true
  validates :user_id, :uniqueness =>
      { :scope => :book_id, :message => "cannot review the same book twice." }
  validates :user_id, :book_id, :presence => true
  belongs_to :user
  belongs_to :book
end
