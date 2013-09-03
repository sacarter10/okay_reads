window.Goodreadsclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		console.log($('#bootstrapped_books').html());
		var book_data = JSON.parse($('#bootstrapped_books').html());
		var books = Goodreadsclone.Collections.Books(book_data);
    Goodreadsclone.Routers.Books.new({
			collection: books,
			sidebar: $('#sidebar'),
			rootEl: $('#rootEl')
		});
		Backbone.history.start();
  }
};

