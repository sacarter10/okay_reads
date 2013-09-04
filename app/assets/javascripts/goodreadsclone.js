window.Goodreadsclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var books = new Goodreadsclone.Collections.Books();
		books.fetch({
			success: function () {
				console.log("fetch successful")
		    new Goodreadsclone.Routers.Books ({
					collection: books,
					sidebar: $('#sidebar'),
					rootEl: $('#content')
				});
				Backbone.history.start();
			}
		});
  }
};

