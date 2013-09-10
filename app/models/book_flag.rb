class BookFlag < ActiveRecord::Base
  attr_accessible :book_id, :user_id

  belongs_to :book
  belongs_to :user

  validates :book_id, :user_id, :presence => true
  validates :book_id, :uniqueness => { :scope => :user_id }
end
