class MergeRatingsAndReviews < ActiveRecord::Migration
  def up
    drop_table :ratings

    add_column :reviews, :rating, :integer
  end

  def down
  end
end
