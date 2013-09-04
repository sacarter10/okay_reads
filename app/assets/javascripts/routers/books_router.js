Goodreadsclone.Routers.Books = Backbone.Router.extend({

	routes: {
		"(:page)": "booksPage",
		"books(/:book_id)": "bookShow",
		"genre/:genre(/:page)": "genrePage"
	},

	initialize: function (options) {
		this.collection = options.collection;
		this.rootEl = options.rootEl;
		this.sidebar = options.sidebar;
		this.genres = options.genres;

		this._installSidebar();
	},

	_installSidebar: function () {
		var sidebarView = new Goodreadsclone.Views.BooksSidebar({
			genres: this.genres
		});

		this.sidebar.html(sidebarView.render().$el);
	},

	booksPage: function (page) {
		var page = page || 1;
		this.collection.currentPage = page;

		var pageView = new Goodreadsclone.Views.BooksIndex({
			collection: this.collection
		});
		this.rootEl.html(pageView.render().$el);
	},

	bookShow: function (book_id) {
		var book = this.collection.get(book_id);
		var bookView = new Goodreadsclone.Views.BookShow( { model: book } );

		this.rootEl.html(bookView.render().$el);
	},

	genrePage: function (genre, page) {
		var books = this.collection.where({ genre: genre});
		var genreCol = new Goodreadsclone.Collections.Books(books)

		var page = page || 1;

		genreCol.currentPage = parseInt(page);
		genreCol.genre = genre;

		var genreView = new Goodreadsclone.Views.BooksIndex({
			collection: genreCol, //will the books in this collection still point to the books in the main collection?
		});

		this.rootEl.html(genreView.render().$el);
	}

});
