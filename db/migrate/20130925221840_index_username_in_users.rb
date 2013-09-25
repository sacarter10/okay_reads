class IndexUsernameInUsers < ActiveRecord::Migration
  def up
  	add_index :users, :username
  end

  def down
  	add_index :users, :username
  end
end
