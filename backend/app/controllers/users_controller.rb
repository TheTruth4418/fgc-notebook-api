class UsersController < ApplicationController
  def create
    @user = User.find_by(:username => params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
        session[:user_id] = @user.id
        render json: user, status:200
    else
      rebder json: {message: "User credentials are invalid please try again."}
    end
end

end
