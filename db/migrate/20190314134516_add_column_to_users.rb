class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :family_name, :string
    add_column :users, :last_name, :string
    add_column :users, :family_name_jp, :string
    add_column :users, :last_name_jp, :string
    add_column :users, :postal_code, :string
    add_column :users, :prefecture, :string
    add_column :users, :city, :string
    add_column :users, :add_ress, :string
    add_column :users, :building, :string
    add_column :users, :phonenumber,:string
    add_column :users, :gender, :string
    add_column :users, :year, :string
    add_column :users, :month, :string
    add_column :users, :day, :string
    add_column :users, :postal_name, :string
    add_column :users, :mile ,:integer
  end
end
