node :current_page do
  @page
end

node :per_page do
  @per_page
end

node :total_pages do
  @books.total_pages
end

child @books => :models do
    attributes :id, :author, :title, :genre, :open_library_id
end