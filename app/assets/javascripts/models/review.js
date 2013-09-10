Goodreadsclone.Models.Review = Backbone.Model.extend({
	parse: function (data) {
		var user = new Goodreadsclone.Models.User(data.user);
		data.user = user;

		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.author;

		return json;
	}
});
