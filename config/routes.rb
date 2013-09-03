Goodreadsclone::Application.routes.draw do
  resources :users, :only => [:new, :create]
  resource :session, :only => [:create, :new, :destroy]
  resources :books, :only => [:index, :show]
  root :to => "books#index"
end
