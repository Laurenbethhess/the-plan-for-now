class TodoSerializer < ActiveModel::Serializer
  attributes :id, :todo, :importance
  has_one :user
  has_one :category
end
