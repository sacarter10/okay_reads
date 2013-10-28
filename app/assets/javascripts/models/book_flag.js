// The BookFlag model marks whether a user has marked the book 
// as one that they "Want to Read"
Goodreadsclone.Models.BookFlag = Backbone.Model.extend({
	parse: function (data) {
		var book = new Goodreadsclone.Models.Book(data.book, {parse: true});
		data.book = book;

		return data;
	},

	url: function () {
		if (this.get('id')) {
			return "/book_flags/" + this.get('id');
		} else {
			return "/book_flags";
		}
	}
});
