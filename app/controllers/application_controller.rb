class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper

  def must_be_logged_in
    unless logged_in?
      redirect_to new_session_url
    end
  end
end
