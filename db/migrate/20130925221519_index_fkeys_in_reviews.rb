class IndexFkeysInReviews < ActiveRecord::Migration
  def up
  	add_index :reviews, [:user_id, :book_id]
  end

  def down
  	remove_index :reviews, [:user_id, :book_id]
  end
end
