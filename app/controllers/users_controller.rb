class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = current_user
    @mile = {"MUJIマイル" => 100}
  end
end
