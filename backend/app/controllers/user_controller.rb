class UsersController < ApplicationController
      def create
        user = User.new(username: params[:username], password: params[:password])
        if @user.valid?
          @user.save
          render json: {message:"User saved, please Login!"}
        else 
            render json: {message:"There was a problem creating a user please try again"}
        end
      end
end
