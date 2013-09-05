class RatingsController < ApplicationController
  def create
    @rating = Rating.new(params[:rating])
    @rating.user_id = current_user.id

    if @rating.save
      render :json => @rating
    else
      render :json => @rating.errors.full_messages, :status => 422
    end
  end

  def update
    @rating = Rating.find(params[:id])
    p @rating

    if @rating.update_attributes(params[:rating])
      render :json => @rating
    else
      render :json => @rating.errors.full_messages, :status => 422
    end
  end
end
