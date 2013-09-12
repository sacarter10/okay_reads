object @user
attributes :id, :username

child :reviews do
  attributes :id, :title, :body, :book_id, :rating
end

child :reviewed_books => :reviewed_books do
  attributes :id, :title, :author, :genre, :open_library_id

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
end

child :to_read_books => :to_read_books do
  attributes :id, :title, :author, :genre, :open_library_id
end

