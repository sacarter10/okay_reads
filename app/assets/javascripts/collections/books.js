Goodreadsclone.Collections.Books = Backbone.Collection.extend({

  model: Goodreadsclone.Models.Book,
	url: "/books",

	prevPage: function () {
		return parseInt(this.currentPage) - 1;
	},

	nextPage: function () {
		return parseInt(this.currentPage) + 1;
	},

	page: function(page) {
		var start = (page - 1)*this.elemsPerPage;
		var end = (page)*this.elemsPerPage;

		return this.slice(start, end);
	},

	parse: function (data) {
		this.currentPage = data.current_page;
		this.totalPages = data.total_pages;
		this.elemsPerPage = data.per_page;

		return data.models;
	},

	pagePath: function () {
		if (this.currentGenre === undefined) {
			return "#/";
		} else {
			return "#genre/" + this.currentGenre + "/";
		}
	}

});
