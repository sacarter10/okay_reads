class AddColumnsToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :user_id, :integer
    add_column :reviews, :rating_id, :integer
    add_column :reviews, :title, :string
    add_column :reviews, :body, :text
  end
end
