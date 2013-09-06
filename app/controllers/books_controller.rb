class BooksController < ApplicationController
  def index
    @books = Book.order('title').page(params[:page])
    @page = params[:page]

    render "index.rabl"
  end
end
