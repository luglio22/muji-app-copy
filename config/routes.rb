Rails.application.routes.draw do
  root "products#index"
  devise_for :users
  resources :products, only: [:index,:new, :edit, :update] do
  end

  resources :users, only: [:index,:new, :edit, :update] do
  end

  resources :living, only: [:index,:show,:new, :edit, :update] do
  end
end
