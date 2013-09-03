class ApiRequest < ActiveRecord::Base

  def updateIndex(date, list)
    url = Addressable::URI.new(
    :scheme => "http",
    :host => "api.nytimes.com",
    :path => "/svc/books/v2/lists/#{date}/#{list}.json"),
    :query_values => {
      "api-key" => ENV['NYTIMES_API_KEY']
    }.to_s

    response = HTTParty.get()
  end
end
