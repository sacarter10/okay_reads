Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		this.$el.html(this.template({
			book: this.model
		}));

		var currentReview = this.model.get('reviews').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (currentReview) {
			var currentRating = currentReview.get('rating');
		} else {
			currentRating = 0;
		}

		var reviewsView = new Goodreadsclone.Views.ReviewsIndex({ collection: this.model.get('reviews') });
		this.$el.find('.reviews').html(reviewsView.render().$el);

		return this;
	}
});
