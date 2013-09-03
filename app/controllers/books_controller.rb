class BooksController < ApplicationController
  def index
    @books = Book.page(1)

    render "index.rabl"
  end
end
