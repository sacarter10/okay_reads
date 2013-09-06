Goodreadsclone::Application.routes.draw do
  resources :users, :only => [:new, :create]
  resource :session, :only => [:create, :new, :destroy]
  resources :books, :only => [:index, :show]
  resources :ratings, :only => [:create, :update] #should this be nested under books?
  resources :reviews, :only => [:create, :update]
  root :to => "root#root"
end
