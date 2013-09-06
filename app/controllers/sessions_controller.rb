class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_username(params[:user][:username]);

    if !@user
      flash[:errors] ||= []
      flash[:errors] << "Username not found."

      render :new
    elsif !@user.verify_password(params[:user][:password])
      flash[:errors] ||= []
      flash[:errors] << "Incorrect password."

      render :new
    else
      @user.reset_session_token!
      session[:token] = @user.session_token

      p "!!!!!!!!!"
      p @user.session_token
      p session[:token]
      p current_user
      redirect_to "/root"
    end
  end

  def destroy
    logout_user(current_user)

    redirect_to new_session_url
  end
end
