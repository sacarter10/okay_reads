Goodreadsclone.Views.BooksIndex = Backbone.View.extend({

  template: JST['books/index'],

	render: function () {
		var that = this;
		var renderedTemplate = this.template({ books: that.collection });
		this.$el.html(this.template({ books: that.collection, page: this.page }));
		return this;
	}

});
