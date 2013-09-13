Goodreadsclone.Collections.BookFlags = Backbone.Collection.extend({

  model: Goodreadsclone.Models.BookFlag,
	url: "/book_flags",

	findByBookId: function (bookId) {
		for (var i = 0; i < this.models.length; i++) {
			if (this.models[i].get('book').id === bookId) {
				return this.models[i];
			}
		};
		return null;
	}
});
