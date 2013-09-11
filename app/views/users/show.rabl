object @user
attributes :id, :username

child :reviews do
  attributes :id, :title, :body, :book_id, :rating
end

child :reviewed_books => :reviewed_books do
  attributes :id, :title, :author, :genre, :open_library_id
end

child :to_read_books => :to_read_books do
  attributes :id, :title, :author, :genre, :open_library_id
end