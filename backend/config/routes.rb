Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/characters' => 'characters#index'

  get '/characters/:name/character_notes' => 'character_notes#show'
  get '/characters/:char/matchup_notes/:opp' => 'matchup_notes#show'
  delete '/notes/:id/delete' => 'notes#destroy'
  delete '/character_notes/:id/delete' => 'character_notes#destroy'
  delete '/matchup_notes/:id/delete' => 'matchup_notes#destroy'
  post '/notes/new' => 'notes#create'
  post 'characters/:id/character_note/new' => 'character_notes#create'
  post 'characters/:id/matchup_note/new' => 'matchup_notes#create'
end
