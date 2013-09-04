Goodreadsclone.Collections.Books = Backbone.Collection.extend({

  model: Goodreadsclone.Models.Book,
	url: "/books",
	elemsPerPage: 25,

	initialize: function () {
		if (this.genre === undefined) {
			this.pagePath = "#/"
		} else {
			this.pagePath = "#genre/" + this.genre + "/"
		}
	},

	prevPage: function () {
		if (this.currentPage === 1) {
			return null;
		}
		else {
			return parseInt(this.currentPage) - 1;
		}
	},

	nextPage: function () {
		if ((this.currentPage * this.elemsPerPage) > this.length)
			return null;
		else
			return parseInt(this.currentPage) + 1;
	},

	page: function(page) {
		var start = (page - 1)*this.elemsPerPage;
		var end = (page)*this.elemsPerPage;

		return this.slice(start, end);
	},

	totalPages: function () {
		return (Math.ceil(this.length / this.elemsPerPage));
	}

});
