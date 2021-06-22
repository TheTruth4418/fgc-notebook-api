class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
    def create
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
          token = encode_token({ user_id: @user.id })
          render json: { user: @user.username, jwt: token }, status: :accepted
        else
          render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end

    def profile
        render json: { user: current_user.username }, status: :accepted
      end

    def destroy
        reset_session
        render json: {status: 200, logged_out: true }
      end
end
