class RatingsController < ApplicationController
  def create
    @rating = Rating.new(params[:rating])

    if @rating.save
      render :json => @rating
    else
      render :json => @rating.errors.full_messages, :status => 422
    end
  end

  def update
    @rating = Rating.find(params[:id])

    if @rating.update_attributes
      render :json => @rating
    else
      render :json => @rating.errors.full_messages, :status => 422
    end
  end
end
