Goodreadsclone.Routers.Books = Backbone.Router.extend({
	routes: {

	},

	initialize: function (options) {
		this.collection = options.collection;
		this.rootEl = options.rootEl;
		this.sidebar = options.sidebar;
	}
});
