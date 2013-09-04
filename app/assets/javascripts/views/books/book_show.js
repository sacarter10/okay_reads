Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

	render: function () {
		this.$el.html(this.template({ book: this.model }));
		return this;
	}

});
