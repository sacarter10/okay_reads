Goodreadsclone.Models.User = Backbone.Model.extend({
	parse: function (data) {
		var reviews = new Goodreadsclone.Collections.Reviews(data.reviews, {parse: true});
		var book_flags = new Goodreadsclone.Collections.BookFlags(data.book_flags, {parse: true});

		data.reviews = reviews;
		data.book_flags = book_flags;

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.reviews;
		delete json.to_read_books;

		return json;
	},

	url: function () {
		return "/users/" + this.id;
	}
});
