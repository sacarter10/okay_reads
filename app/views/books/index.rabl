collection @books
attributes :id, :author, :title, :genre, :open_library_id

child :rating do
  attributes :id, :user_id, :book_id, :stars
end

