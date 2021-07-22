class SessionsController < ApplicationController
  #AUTH COMING AT A LATER DATE
  def create
    user = User.find_by(:username => params[:userObj][:username])
    if user && user.authenticate(params[:userObj][:password])
        session[:user_id] = user.id
        session[:_crsf_token] ||= SecureRandom.base64(32)
        binding.pry
        render json: {message: "#{session.to_hash}"}, status: 200
    else
      render json: {message:"Credentials invalid please try again"}, status: 404
    end
end


def destroy
  session.clear
end
end
