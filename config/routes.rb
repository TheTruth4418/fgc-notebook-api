Rails.application.routes.draw do
  resources :notes
  resources :matchup_notes
  resources :matchups
  resources :character_notes
  resources :characters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
