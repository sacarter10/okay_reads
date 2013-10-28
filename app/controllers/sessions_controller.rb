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
      session[:token] = @user.reset_session_token!

      redirect_to root_url
    end
  end

  def destroy
    logout_user(current_user)

    redirect_to new_session_url
  end

  def facebook_create
    p "IN FACEBOOK CREATE"
    @user = User.from_omniauth(ENV["omniauth.auth"])

    session[:token] = @user.reset_session_token!

    redirect_to root_url
  end
end
