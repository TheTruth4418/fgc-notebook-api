class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
  
  def create
    @user = User.find_by(email: params[:state][:email])
    if @user && @user.authenticate(params[:state][:password])
      @token = encode_token({ user_id: @user.id })
      render json: { user: {name: @user.name, email:@user.email}, jwt: @token }, status: :created
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
