Goodreadsclone.Models.Review = Backbone.Model.extend({
	parse: function (data) {
		if (data.user) {
			var user = new Goodreadsclone.Models.User(data.user);
			data.user = user;
		}

		if (data.reviewed_book) {
			var reviewed_book = new Goodreadsclone.Models.User(data.reviewed_book);
			data.reviewed_book = reviewed_book;
		}

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.author;

		return json;
	}
});
