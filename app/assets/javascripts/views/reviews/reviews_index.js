Goodreadsclone.Views.ReviewsIndex = Backbone.View.extend({

  template: JST['reviews/index'],

	initialize: function () {
		this.listenTo(this.collection, 'change', this.render);
		this.listenTo(this.collection, 'add', this.render);
	},

	render: function () {
		var that = this;
		this.$el.html(this.template({ reviews: this.collection }));

		this.collection.each( function (review) {
			if (review.get('title')) {
				var showView = new Goodreadsclone.Views.ReviewShow({model: review});
				that.$el.append(showView.render().$el);
			}
		});

		return this;
	}

});
