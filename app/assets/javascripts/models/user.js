Goodreadsclone.Models.User = Backbone.Model.extend({
	parse: function (data) {
		var reviews = new Goodreadsclone.Collections.Reviews(data.reviews);
		var reviewed_books = new Goodreadsclone.Collections.Books(data.reviewed_books);

		data.reviews = reviews;
		data.reviewed_books = reviewed_books;

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.reviews;
		delete json.reviewed_books;

		return json;
	}
});
