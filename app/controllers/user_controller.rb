class UserController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: "User saved"
    else
      render json: @user.errors.full_messages
    end
  end

  def ask
    ContactMailer.with(information: contact_params).contact_email.deliver_now
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end

  def contact_params
    params.require(:information).permit(:name, :email, :phone, :message)
  end
end
