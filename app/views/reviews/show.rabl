object @review
attributes :id, :rating, :title, :body

child :user do
  attributes :id, :username
end
