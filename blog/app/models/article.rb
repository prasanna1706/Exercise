class Article < ApplicationRecord
	self.table_name = 'my_articles'
  has_many :comments, dependent: :destroy
  validates :title, presence: true,
                    length: { minimum: 5 }
  validates :description, presence: true,
                    length: { minimum: 100 }
end