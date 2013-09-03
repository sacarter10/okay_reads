# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# csv_text = File.read('../top100books2012.csv')
# csv = CSV.parse(csv_text, :headers => true)
# csv.each do |row|
#   row = row.to_hash
#   Book.create(:title => row["Title"], :author => row["Author"], :genre => row["Genre"])
# end

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
    :query_values => {:limit => 400}
  ).to_s

  response = JSON.parse(RestClient.get(url))
  response["works"].each do |work|
    next unless work && !work["authors"].empty?
    author = work["authors"].first["name"] if work["authors"]

  #   book_search_url = Addressable::URI.new(
  #     :scheme => "http",
  #     :host => "openlibrary.org",
  #     :path => "/api/books?bibkeys=OLID:#{work['cover_edition_key']}"
  #   ).to_s
  #
  #   book_response = RestClient.get(book_info_url)

    Book.create({
      title: work["title"],
      author: author,
      genre: subject,
      open_library_id: work['cover_edition_key']
    })
  end
end