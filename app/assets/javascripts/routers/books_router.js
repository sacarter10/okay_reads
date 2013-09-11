Goodreadsclone.Routers.Books = Backbone.Router.extend({

	routes: {
		"books(/:book_id)": "bookShow",
		"genre/:genre(/:page)": "genrePage",
		"bookshelf": "bookshelf",
		"(:page)": "booksPage"
	},

	initialize: function (options) {
		this.collection = options.collection;
		this.rootEl = options.rootEl;
		this.sidebar = options.sidebar;
		this.genres = options.genres;

		this._addSidebar();
	},

	_addSidebar: function () {
		var sidebarView = new Goodreadsclone.Views.BooksSidebar({
			genres: this.genres
		});

		this.sidebar.html(sidebarView.render().$el);
	},

	booksPage: function (page) {
		console.log('in booksPage')
		var page = page || 1;
		var that = this;

		this.collection.currentPage = page;

		this.collection.fetch({
			data: { page: page },
			success: function(coll, resp, options) {
				var pageView = new Goodreadsclone.Views.BooksIndex({
					collection: that.collection
				});
				that._swapView(pageView);
			},
			error: function(coll, resp, options){
				debugger
			},
		});
	},

	bookShow: function (book_id) {
		var that = this;
		var book = new Goodreadsclone.Models.Book({ id: book_id });
		book.fetch({
			success: function (model, res, options) {
				var bookView = new Goodreadsclone.Views.BookShow( { model: book } );
				that._swapView(bookView);
			}
		});
	},

	genrePage: function (genre, page) {
		console.log('in genre page')
		var page = page || 1;
		var that = this;

		this.collection.currentPage = page;
		this.collection.currentGenre = genre;

		this.collection.fetch({
			data: { page: page, genre: genre },
			success: function(coll, resp, options) {
				var pageView = new Goodreadsclone.Views.BooksIndex({
					collection: that.collection
				});
				that._swapView(pageView);
			},
			error: function(coll, resp, options) {
				debugger
			},
		});
	},

	bookshelf: function () {
		console.log('in shelfIndex')
		var shelfView = new Goodreadsclone.Views.ShelvesIndex();

		this._swapView(shelfView);
	},

	_swapView: function (newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		$(this.rootEl).html(newView.render().$el);
	}
});
