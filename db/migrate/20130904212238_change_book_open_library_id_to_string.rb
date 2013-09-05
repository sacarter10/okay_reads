class ChangeBookOpenLibraryIdToString < ActiveRecord::Migration
  def change
    remove_column :books, :open_library_id
    add_column :books, :open_library_id, :string
  end
end
