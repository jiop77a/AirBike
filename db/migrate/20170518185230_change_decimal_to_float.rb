class ChangeDecimalToFloat < ActiveRecord::Migration
  def change
    remove_column :bikes, :lat
    remove_column :bikes, :lng
    add_column :bikes, :lat, :float
    add_column :bikes, :lng, :float
  end
end
