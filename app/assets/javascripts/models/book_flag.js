Goodreadsclone.Models.BookFlag = Backbone.Model.extend({
	parse: function (data) {
		var book = new Goodreadsclone.Models.Book(data.book, {parse: true});
		data.book = book;

		return data;
	},

	url: function () {
		return "/book_flags/" + this.id;
	}
});
