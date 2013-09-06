Goodreadsclone.Models.Book = Backbone.Model.extend({
	parse: function (data) {
		var ratings = new Goodreadsclone.Collections.Ratings(data.ratings);
		data.ratings = ratings;

		var reviews = new Goodreadsclone.Collections.Reviews(data.reviews);
		data.reviews = reviews;

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.ratings;
		delete json.reviews;

		return json;
	},

	urlRoot: "/ratings"
});
