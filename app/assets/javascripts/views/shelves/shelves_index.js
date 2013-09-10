Goodreadsclone.Views.ShelvesIndex = Backbone.View.extend({
	template: JST['shelves/index'],

	render: function () {
		this.$el.html(this.template({ user: Goodreadsclone.Store.currentUser }));
		return this;
	}
})