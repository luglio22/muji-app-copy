class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :family_name, :last_name, :family_name_jp, :last_name_jp, :postal_code, :prefecture, :city, :add_ress, :building,:phonenumber, :gender, :year, :monhth, :day, :postal_name])
    end
end
