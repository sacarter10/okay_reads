window.Goodreadsclone = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Store: {},
	initialize: function() {
		this.Store.currentUser = new Goodreadsclone.Models.User(
			JSON.parse($('#current_user_json').html()), { parse: true });

			var books = new Goodreadsclone.Collections.Books();

			new Goodreadsclone.Routers.Books ({
				collection: books,
				sidebar: $('#sidebar'),
				rootEl: $('#content'),
				genres: ["science_fiction", "fantasy", "biography", "historical_fiction", "mystery",
				"poetry", "romance"] //this is also in db/seeds.rb; refactor???
			});
			Backbone.history.start();
		}
	};

