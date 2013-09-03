class AddOlidToBooks < ActiveRecord::Migration
  def change
    add_column :books, :open_library_id, :integer
  end
end
