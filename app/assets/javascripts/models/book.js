Goodreadsclone.Models.Book = Backbone.Model.extend({
	parse: function (data) {
		var ratings = new Goodreadsclone.Collections.Ratings(data.ratings);
		data.ratings = ratings;
		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.ratings;

		return json;
	},

	urlRoot: "/ratings"
});
