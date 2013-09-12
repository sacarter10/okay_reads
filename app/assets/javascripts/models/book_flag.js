Goodreadsclone.Models.BookFlag = Backbone.Model.extend({
	url: function () {
		return "/book_flags/" + this.id;
	}
});
