class ReviewsController < ApplicationController
  def create
    p "in create"
    @review = Review.new(params[:review])
    @review.user_id = current_user.id

    if @review.save
      render :json => @review
    else
      render :json => @review.errors.full_messages, :status => 422
    end
  end

  def update
    p "in update"
    @review = Review.find(params[:id])

    if @review.update_attributes(params[:review])
      render :json => @review
    else
      p "!!!!! #{@review}"
      render :json => @review.errors.full_messages, :status => 422
    end
  end
end
