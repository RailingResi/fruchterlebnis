Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :frontend do 
  scope module: 'frontend' do
    get 'profile', to: 'pages#profile'
  end
  
  root 'frontend/pages#welcome'
end
