collection @books
attributes :id, :author, :title, :genre, :open_library_id

child :ratings do
  attributes :id, :user_id, :book_id, :stars
end

node :average_rating do |book|
  num_ratings = book.ratings.count()

  if num_ratings == 0
    "not yet rated"
  else
    sum_ratings = book.ratings.sum(:stars)
    sum_ratings.to_f/num_ratings
  end
end

child :reviews do
  attributes :id, :user_id, :rating_id, :title, :body
end
