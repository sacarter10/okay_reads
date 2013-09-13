Goodreadsclone.Models.Review = Backbone.Model.extend({
	parse: function (data) {
		if (data.user) {
			var user = new Goodreadsclone.Models.User(data.user);
			data.user = user;
		}

		if (data.book) {
			var book = new Goodreadsclone.Models.User(data.book);
			data.book = book;
		}

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.author;

		return json;
	}
});
