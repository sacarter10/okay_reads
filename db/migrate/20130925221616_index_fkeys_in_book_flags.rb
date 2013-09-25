class IndexFkeysInBookFlags < ActiveRecord::Migration
  def up
  	add_index :book_flags, [:user_id, :book_id]
  end

  def down
  	remove_index :book_flags, [:user_id, :book_id]
  end
end
