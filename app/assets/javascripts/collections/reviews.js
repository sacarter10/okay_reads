Goodreadsclone.Collections.Reviews = Backbone.Collection.extend({

  model: Goodreadsclone.Models.Review,
	url: "/reviews",

	findByUserId: function (user_id) {

		for (var i = 0; i < this.models.length; i++) {
			if (this.models[i].get('user').id === user_id) {
				return this.models[i];
			}
		};

		return null;
	}
});
