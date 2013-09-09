Goodreadsclone.Views.BooksIndex = Backbone.View.extend({

  template: JST['books/index'],

	render: function () {
		var that = this;

		this.$el.html(this.template({
			books: that.collection,
			path: that.collection.pagePath
		}));
		return this;
	}

});
