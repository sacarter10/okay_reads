Goodreadsclone.Views.BooksIndex = Backbone.View.extend({

  template: JST['books/index'],

	render: function () {
		var that = this;

		this.$el.html(this.template({
			books: that.collection,
			page: that.collection.currentPage,
			path: that.collection.pagePath
		}));
		return this;
	}

});
