class UsersController < ApplicationController
  def create
      user = User.new(
      username: params[:userObj][:username],
      password: params[:userObj][:password]
    )
    if user.valid?
      user.save
      render json: {message: "User #{user.username} saved! Please login using your credentials!"}
    else
      render json: {message: "The user could not be created, ensure you have a unique username and a Password!"}
    end
  end
end
