Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resourcer :bike, only: [:index, :show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
