# use Open Library API to seed databse with some books
require 'addressable/uri'
require 'rest-client'

SUBJECTS = ["science_fiction", "fantasy", "biography",
  "classics", "historical_fiction", "mystery",
  "poetry", "romance"]

  #debugger
SUBJECTS.each do |subject|
  url = Addressable::URI.new(
    :scheme => "http",
    :host => "openlibrary.org",
    :path => "/subjects/#{subject}.json",
    :query_values => {:limit => 40}
  ).to_s

  response = JSON.parse(RestClient.get(url))
  response["works"].each do |work|
    next unless work && !work["authors"].empty?
    author = work["authors"].first["name"] if work["authors"]

    Book.create({
      title: work["title"],
      author: author,
      genre: subject,
      open_library_id: work['cover_edition_key']
    })
  end
end