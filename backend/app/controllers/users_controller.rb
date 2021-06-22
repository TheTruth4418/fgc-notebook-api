class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
      def create
        user = User.new(username: params[:username], password: params[:password])
        if user.valid?
          user.save
          token = encode_token(user_id: user.id)
          render json:{user: user.username, jwt: token }, status: :created
          render json: {message:"User saved, please Login!"}
        else 
            render json: {message:"There was a problem creating a user please try again"}, status: :invalid
        end
      end
end
