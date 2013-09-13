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

node :to_read_flag do
  if !logged_in?
    null
  else
    @book.book_flags.find_by_user_id(current_user.id)
  end
end

child :reviews do
  attributes :id, :rating, :title, :body

  child :user do
    attributes :id, :username
  end
end