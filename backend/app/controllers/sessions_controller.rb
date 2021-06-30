class SessionsController < ApplicationController
  def create
    user = User.find_by(:username => params[:userObj][:username])
    if user && user.authenticate(params[:userObj][:password])
        session[:user_id] = user.id
        render json: user, status: 200
    else
      render json: {message:"Credentials invalid please try again"}, status: 404
    end
end


def destroy
  session.clear
end
end
