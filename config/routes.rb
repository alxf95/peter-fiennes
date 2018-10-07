Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get 'books', to: 'pages#books'
  get 'media', to: 'pages#media'
  get 'contact', to: 'pages#contact'
end
