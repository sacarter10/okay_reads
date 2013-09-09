class RootController < ApplicationController
  before_filter :must_be_logged_in

  def root
    render :root
  end
end
