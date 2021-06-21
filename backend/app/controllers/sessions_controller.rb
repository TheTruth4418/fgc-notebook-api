class SessionsController < ApplicationController
    def create
        @user = User.find_by(:username => params[:username])
        if @user && @user.authenticate(params[:password])
            render json: {message:"Welcome!"}
        else
            render json: {message:"'The credential combination is invalid please try again.'"}
          render "new"
        end
    end

    def destroy
        session.clear
        redirect_to "/"
      end
end
