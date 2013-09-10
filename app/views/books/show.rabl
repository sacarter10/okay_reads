object @book

attributes :id, :author, :title, :genre, :open_library_id

node :average_rating do |book|

  num_ratings = 0
  sum_ratings = 0

  book.reviews.each do |review|
    if review.rating
      num_ratings += 1
      sum_ratings += review.rating
    end
  end

  if num_ratings == 0
    "not yet rated"
  else
    sum_ratings.to_f/num_ratings
  end
end

child :reviews do
  attributes :id, :user_id, :rating, :title, :body
end