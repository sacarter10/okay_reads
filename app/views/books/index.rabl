collection @books
attributes :id, :author, :title, :genre, :open_library_id

child :ratings do
  attributes :id, :user_id, :book_id, :stars
end

node :average_rating do |book|
  num_ratings = book.ratings.count()

  if num_ratings == 0
    0
  else
    sum_ratings = book.ratings.count(:stars)
    sum_ratings/num_ratings
  end
end
