Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

	events: {
		"click .stars": "createRating"
	},

	createRating: function () {
		
	},

	render: function () {
		this.$el.html(this.template({ book: this.model }));
		return this;
	}


});
