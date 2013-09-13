Goodreadsclone.Models.Book = Backbone.Model.extend({
	parse: function (data) {
		if (data.reviews) {
			var reviews = new Goodreadsclone.Collections.Reviews(data.reviews, { parse: true });
			reviews.book_id = data.id;
			data.reviews = reviews;
		}

		if (data.review) {
			var review = new Goodreadsclone.Models.BookFlag(data.review, { parse: true });
			data.review = review;
		}

		if (data.to_read_flag) {
			var to_read_flag = new Goodreadsclone.Collections.BookFlags(data.to_read_flag);
			data.to_read_flag = to_read_flag;
		}


		return data;
	},

	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.reviews;

		return json;
	},

	url: function () {
		return "/books/" + this.id;
	}
});
