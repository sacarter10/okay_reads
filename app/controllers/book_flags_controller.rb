class BookFlagsController < ApplicationController
  def create
    @book_flag = BookFlag.new(params[:book_flag])

    if @book_flag.save
      render :json => @book_flag
    else
      p @book_flag.errors.full_messages
      render :json => @book_flag.errors.full_messages, :status => 422
    end
  end

  def destroy
    @book_flag = Flag.find(params[:id])
    @book_flag.destroy

    render :json => @book_flag
  end
end
