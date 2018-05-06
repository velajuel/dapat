Rails.application.routes.draw do
  root "welcome#index"  

  post "/users" => "user#create"

  post "/users/ask" => "user#ask"
end
