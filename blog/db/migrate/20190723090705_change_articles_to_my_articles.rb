class ChangeArticlesToMyArticles < ActiveRecord::Migration[5.2]
  def change
  	rename_table :articles, :my_articles
  end
end
