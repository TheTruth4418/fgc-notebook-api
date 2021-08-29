class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def user
    @user = current_user
    render json: { user: {name: @user.name, email:@user.email} }, status: :accepted
  end

  def create
    @user = User.new(name: params[:userObj][:name], email: params[:userObj][:email], password: params[:userObj][:password])
    if @user.valid?
      @user.save!
      @token = encode_token({ user_id: @user.id })
      Cart.create(user_id: @user.id)
      render json: { user: {name: @user.name, email:@user.email}, jwt: @token }, status: :created
    else
      render json: { message: 'failed to create user' }, status: :not_acceptable
    end
  end
end
