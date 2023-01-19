Rails.application.routes.draw do
  root 'messages#index'
  get 'messages/random', to: 'messages#random'
end
