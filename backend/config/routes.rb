Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/characters' => 'characters#index'
  get '/characters/:id' => 'characters#show'

  get 'characters/:id/character_notes' => 'character_notes#index'
  post 'characters/:id/character_note/new' => 'character_notes#create'
  post 'characters/:id/matchup_note/new' => 'matchup_notes#create'
end
