Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/characters' => 'characters#index'
  get '/characters/:id' => 'characters#show'

  post '/characters/:id/character_notes/:id' => 'character_notes#show'
  post '/characters/:id/matchup_notes/:id' => 'matchup_notes#show'
  post '/notes/new' => 'notes#create'
  delete '/notes/:id/delete' => 'notes#destroy'
  delete '/character_notes/:id/delete' => 'character_notes#destroy'
  delete '/matchup_notes/:id/delete' => 'matchup_notes#destroy'
  get 'characters/:id/character_notes' => 'character_notes#index'
  post 'characters/:id/character_note/new' => 'character_notes#create'
  post 'characters/:id/matchup_note/new' => 'matchup_notes#create'
end
