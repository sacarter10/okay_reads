Goodreadsclone.Collections.Books = Backbone.Collection.extend({

  model: Goodreadsclone.Models.Book,
	url: "/books",
	elemsPerPage: 25,
	
	prevPage: function () {
		if (this.currentPage === 1) {
			return null;
		}
		else {
			return this.currentPage - 1;
		}
	},

	nextPage: function () {
		if ((this.currentPage * this.elemsPerPage) > this.length)
			return null;
		else 
			return this.currentPage - 1;
	},

	page: function(page) {
		var start = (page - 1)*this.elemsPerPage;
		var end = (page)*this.elemsPerPage;
		
		return this.slice(start, end);
	}

});
