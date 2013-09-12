Goodreadsclone.Views.ShelvesIndex = Backbone.View.extend({
	template: JST['shelves/index'],

	render: function () {
		console.log(this.model.get('reviews'));
		this.$el.html(this.template({ user: this.model }));
		console.log(this.model);
		return this;
	}
})