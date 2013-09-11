class ReviewsController < ApplicationController
  def create
    @review = Review.new(params[:review])
    @review.user_id = current_user.id

    if @review.save
      render "show.rabl"
    else
      render :json => @review.errors.full_messages, :status => 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update_attributes(params[:review])
      render "show.rabl"
    else
      render :json => @review.errors.full_messages, :status => 422
    end
  end
end
