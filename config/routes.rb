Goodreadsclone::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:create, :new, :destroy]
  resources :books, :only => [:index, :show]
  resources :ratings, :only => [:create, :update] #should this be nested under books?
  resources :book_flags, :only => [:create, :destroy]
  resources :reviews, :only => [:create, :update]
  root :to => "root#root"
end
