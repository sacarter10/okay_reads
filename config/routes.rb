Goodreadsclone::Application.routes.draw do
  root :to => "root#root"

	get 'auth/:provider/callback', :to => "sessions#facebook_create"
	get 'auth/failure', :to => redirect('/')
	get 'signout', :to => 'sessions#destroy', :as => 'signout'

  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:create, :new, :destroy]
  resources :books, :only => [:index, :show]
  resources :book_flags, :only => [:create, :destroy]
  resources :reviews, :only => [:create, :update, :destroy]
end
