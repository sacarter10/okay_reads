Goodreadsclone.Views.ReviewShow = Backbone.View.extend({

  template: JST['reviews/show'],

	events: {
	},

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		this.$el.html(this.template({ review: this.model }));

		var ratingView = new Goodreadsclone.Views.RatingShow({ 
			model: this.model
		});
		this.$el.find('#review-rating').html(ratingView.render().$el);

		return this;
	}

});
