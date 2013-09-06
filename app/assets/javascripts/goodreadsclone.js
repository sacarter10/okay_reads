window.Goodreadsclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Store: {},
  initialize: function() {
		this.Store.currentUser = JSON.parse($('#current_user_json').html());

		var books = new Goodreadsclone.Collections.Books();
		books.fetch({
			data: { page: 1 },
			remove: false,
			success: function () {
		    new Goodreadsclone.Routers.Books ({
					collection: books,
					sidebar: $('#sidebar'),
					rootEl: $('#content'),
					genres: ["science_fiction", "fantasy", "biography",
  					"classics", "historical_fiction", "mystery",
  					"poetry", "romance"] //this is also in db/seeds.rb; refactor???
				});
				Backbone.history.start();
			}
		});
  }
};

