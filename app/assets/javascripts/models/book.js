Goodreadsclone.Models.Book = Backbone.Model.extend({
	parse: function (data) {
		var reviews = new Goodreadsclone.Collections.Reviews(data.reviews);
		reviews.book_id = data.id;
		data.reviews = reviews;

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.reviews;

		return json;
	},

	urlRoot: "/ratings"
});
