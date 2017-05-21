Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :reviews, only: [:create, :destroy]
    resources :bikes, only: [:index, :show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
