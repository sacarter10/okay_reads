window.Goodreadsclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var books = new Goodreadsclone.Collections.Books();
		books.fetch({
			success: function () {
		    new Goodreadsclone.Routers.Books ({
					collection: books,
					sidebar: $('#sidebar'),
					rootEl: $('#content'),
					genres: ["science_fiction", "fantasy", "biography",
  "classics", "historical_fiction", "mystery",
  "poetry", "romance"] //this is also in db/seeds.rb; consider refactoring
				});
				Backbone.history.start();
			}
		});
  }
};

