class BooksController < ApplicationController
  def index
    @books = Book.order('title').all

    render "index.rabl"
  end
end
