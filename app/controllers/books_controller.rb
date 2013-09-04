class BooksController < ApplicationController
  def index
    @books = Book.page(params[:page])

    render "index.rabl"
  end
end
