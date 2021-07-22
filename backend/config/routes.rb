Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/characters' => 'characters#index'

  post '/signup' => 'users#create'
  post '/login' => 'sessions#create'
  post '/logout' => 'sessions#destroy'
  get '/notes' => 'character_notes#index'
  get '/games' => 'games#index'
  post '/bullet_points/new' => 'bullet_points#create'
  get '/:game/:character/notes' => 'character_notes#show'
  get '/:game/:character/:opponent/notes' => 'matchup_notes#show'
  #get '/characters/:name/character_notes' => 'character_notes#show'
  #get '/characters/:char/matchup_notes/:opp' => 'matchup_notes#show'
  #delete '/notes/:id/delete' => 'notes#destroy'
  #delete '/character_notes/:id/delete' => 'character_notes#destroy'
  #delete '/matchup_notes/:id/delete' => 'matchup_notes#destroy'
  #post '/notes/new' => 'notes#create'
  post 'character_notes/new' => 'character_notes#create'
  post 'matchup_notes/new' => 'matchup_notes#create'
end
