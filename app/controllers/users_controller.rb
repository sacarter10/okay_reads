class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(params[:user])
    @user.reset_session_token!

    if @user.save
      session[:token] = @user.session_token
      redirect_to books_url
    else
      flash[:errors] ||= @user.errors.full_messages
      render :new
    end
  end
end
