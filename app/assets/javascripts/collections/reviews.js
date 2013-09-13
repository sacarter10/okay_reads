Goodreadsclone.Collections.Reviews = Backbone.Collection.extend({

  model: Goodreadsclone.Models.Review,
	url: "/reviews",

	findByUserId: function (userId) {

		for (var i = 0; i < this.models.length; i++) {
			if (this.models[i].get('user').id === userId) {
				return this.models[i];
			}
		};

		return null;
	},

	findByBookId: function (bookId) {
		for (var i = 0; i < this.models.length; i++) {
			if (this.models[i].get('book').id === bookId) {
				return this.models[i];
			}
		};

		return null;
	}
});
