class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def user
    @user = current_user
    render json: { user: {username: @user.username, email:@user.email} }, status: :accepted
  end

  def create
    @user = User.new(username: params[:userObj][:username], email: params[:userObj][:email], password: params[:userObj][:password])
    if @user.valid?
      @user.save!
      @token = encode_token({ user_id: @user.id })
      render json: { user: {username: @user.username, email:@user.email}, jwt: @token }, status: :created
    else
      render json: { message: 'failed to create user' }, status: :not_acceptable
    end
  end
end
