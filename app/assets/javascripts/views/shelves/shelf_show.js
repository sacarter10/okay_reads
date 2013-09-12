Goodreadsclone.Views.ShelfShow = Backbone.View.extend({

  template: JST['shelves/show'],

	events: {
		'click #remove-book' : removeBook
	},

	initialize: function () {
		if (this.options.shelfName === "to_read") {
			this.collection = Goodreadsclone.Store.currentUser.get('reviewed_books');
			this.options.shelfName = "Books You Want to Read";
		} else if (this.options.shelfName === "reviewed") {
			this.collection = Goodreadsclone.Store.currentUser.get('to_read_books');
			this.options.shelfName = "Books You Have Read";
		}
	},

	removeBook: function () {

	},

	render: function () {
		this.$el.html(this.template({
			shelfName: this.options.shelfName,
			books: this.collection
		}));

		return this;
	}
});
