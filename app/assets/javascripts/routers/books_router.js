Goodreadsclone.Routers.Books = Backbone.Router.extend({

	routes: {
		"": "allBooks"
	},

	initialize: function (options) {
		this.collection = options.collection;
		this.rootEl = options.rootEl;
		this.sidebar = options.sidebar;
	},

	allBooks: function () {
		var view = new Goodreadsclone.Views.BooksIndex({ collection: this.collection });
		$('#content').html(view.render().$el);
	}

});
