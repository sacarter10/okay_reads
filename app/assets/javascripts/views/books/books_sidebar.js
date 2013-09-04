Goodreadsclone.Views.BooksSidebar = Backbone.View.extend({

  template: JST['books/sidebar'],

	render: function () {
		var that = this;
		this.$el.html(this.template({ genres: that.options.genres }));
		return this;
	}

});
