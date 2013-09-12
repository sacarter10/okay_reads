Goodreadsclone.Models.User = Backbone.Model.extend({
	parse: function (data) {
		var reviews = new Goodreadsclone.Collections.Reviews(data.reviews, {parse: true});
		var to_read_books = new Goodreadsclone.Collections.Books(data.to_read_books);

		data.reviews = reviews;
		data.to_read_books = to_read_books;

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
