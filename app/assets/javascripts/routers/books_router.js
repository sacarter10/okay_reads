Goodreadsclone.Routers.Books = Backbone.Router.extend({

	routes: {
		"books(/:book_id)": "bookShow",
		"genre/:genre(/:page)": "genrePage",
		"bookshelf/:name": "bookshelfShow",
		"bookshelves": "bookshelvesIndex",
		"(:page)": "booksPage"
	},

	initialize: function (options) {
		this.collection = options.collection;
		this.rootEl = options.rootEl;
		this.sidebar = options.sidebar;
		this.genres = options.genres;
	},

	booksPage: function (page) {
		this.sidebar.html(JST['navigation/books_sidebar']({
			genres: this.genres
		}));

		var page = page || 1;
		var that = this;

		this.collection.currentPage = page;
		this.collection.currentGenre = undefined;

		this.collection.fetch({
			data: { page: page },
			success: function(coll, resp, options) {
				var pageView = new Goodreadsclone.Views.BooksIndex({
					collection: that.collection,
					header: "Books"
				});
				that._swapView(pageView);
			},
			error: function(coll, resp, options){
				console.log(resp.responseJSON);
			},
		});
	},

	bookshelvesIndex: function (name) {
		var that = this;

		this.sidebar.html(JST['navigation/shelves_sidebar']());

		var user = Goodreadsclone.Store.currentUser.fetch({
			success: function (user) {
				var shelvesView = new Goodreadsclone.Views.ShelvesIndex({
					model: Goodreadsclone.Store.currentUser
				});
				that._swapView(shelvesView);
			},
			error: function (response, xhr, options) {
				console.log(xhr.responseJSON);
			}
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

	bookshelfShow: function (name) {
		var that = this;

		var user = Goodreadsclone.Store.currentUser.fetch({
			success: function (user) {
				var shelfView = new Goodreadsclone.Views.ShelfShow({
					user: Goodreadsclone.Store.currentUser,
					shelfName: name
				});
				that._swapView(shelfView);
			},
			error: function (response, xhr, options) {
				console.log(xhr.responseJSON);
			}
		});
	},

	genrePage: function (genre, page) {
		var page = page || 1;
		var that = this;

		this.collection.currentPage = page;
		this.collection.currentGenre = genre;

		this.collection.fetch({
			data: { page: page, genre: genre },
			success: function(coll, resp, options) {
				var pageView = new Goodreadsclone.Views.BooksIndex({
					collection: that.collection,
					header: genre
				});
				that._swapView(pageView);
			},
			error: function(coll, resp, options) {
				debugger
			},
		});
	},

	toReadShelfShow: function () {
		debugger
		var that = this;

		var user = Goodreadsclone.Store.currentUser.fetch({
			success: function (user) {
				var shelfView = new Goodreadsclone.Views.ToReadShelfShow({
					user: Goodreadsclone.Store.currentUser
				});
				that._swapView(shelfView);
			},
			error: function (response, xhr, options) {
				console.log(xhr.responseJSON);
			}
		});
	},

	_swapView: function (newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		$(this.rootEl).html(newView.render().$el);
	}
});
