Goodreadsclone.Routers.Books = Backbone.Router.extend({

	routes: {
		"/:page": "allBooks",
		"/genre/:page": "genreIndex"
	},

	initialize: function (options) {
		this.collection = options.collection;
		this.rootEl = options.rootEl;
		this.sidebar = options.sidebar;
	},

	allBooks: function (page) {
		page = page || 1;
		this.collection.currentPage = page;

		var view = new Goodreadsclone.Views.BooksIndex({ collection: this.collection, page: page });
		$('#content').html(view.render().$el);
	}

});
