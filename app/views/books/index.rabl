node :current_page do
  @page
end

node :total_pages do
  @books.total_pages
end

child @books => :models do
    attributes :id, :author, :title, :genre, :open_library_id

    node :average_rating do |book|
      num_ratings = book.reviews.count(:rating)

      if num_ratings == 0
        "not yet rated"
      else
        sum_ratings = book.reviews.sum(:rating)
        sum_ratings.to_f/num_ratings
      end
    end

    child :reviews do
      attributes :id, :user_id, :rating, :title, :body
    end
end