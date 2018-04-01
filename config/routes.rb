Rails.application.routes.draw do
  root to: 'static#index'

  get '/basic', to: 'static#basic'
  get '/greeter', to: 'static#greeter'
  get '/bad-counter', to: 'static#bad_counter'
  get '/counter', to: 'static#counter'
  get '/slideshow', to: 'static#slideshow'

  resources :enquiries, only: [:create]

  resources :pokemon, only: [:index]
  get '/pokemon/page/:page', to: 'pokemon#page', as: :pokemon_page
end
