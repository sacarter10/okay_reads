class CreateBookRatings < ActiveRecord::Migration
  def change
    create_table :book_ratings do |t|
      t.integer :user_id
      t.integer :book_id

      t.timestamps
    end

    add_index :book_ratings, [ :user_id, :book_id ]
  end
end
