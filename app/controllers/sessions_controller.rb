class SessionsController < ApplicationController
  def new
    @user = User.find_by_username(params[:user][:username]);

    if @user && @user.verify_password

    else

    end
  end

  def create

  end

  def destroy

  end
end
