object @user
attributes :id, :username

child @reviews => :reviews do
  attributes :id, :title, :body, :book_id, :rating, :created_at

  child :book do
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
end

child @book_flags => :book_flags do
  attributes :id, :user_id, :book_id

  child :book do
    attributes :id, :title, :author, :genre, :open_library_id

    node :review do |book|
      book.reviews.find_by_user_id(@user.id)
    end

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
end

