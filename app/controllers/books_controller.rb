class BooksController < ApplicationController
  def index
    @per_page = 25
    if params[:genre]
      @books = Book.where(genre: params[:genre]).order('title').page(params[:page]).per(@per_page).includes(:reviews)
    else
      @books = Book.order('title').page(params[:page]).per(@per_page).includes(:reviews)
    end

    @page = params[:page]

    render "index.rabl"
  end

  def show
    @book = Book.find(params[:id])

    render "show.rabl"
  end
end
