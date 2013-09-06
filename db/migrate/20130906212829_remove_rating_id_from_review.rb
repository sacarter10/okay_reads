class RemoveRatingIdFromReview < ActiveRecord::Migration
  def up
    remove_column :reviews, :rating_id
  end

  def down
    add_column :reviews, :rating_id, :integer
  end
end
