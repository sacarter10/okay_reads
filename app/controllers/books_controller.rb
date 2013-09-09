class BooksController < ApplicationController
  def index
    @per_page = 25
    @books = Book.order('title').page(params[:page]).per(@per_page)
    @page = params[:page]

    render "index.rabl"
  end
end
