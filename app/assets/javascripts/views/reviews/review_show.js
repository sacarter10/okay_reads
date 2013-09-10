Goodreadsclone.Views.ReviewShow = Backbone.View.extend({

  template: JST['reviews/show'],

	events: {
		'submit #editReview' : 'editReview',
		'submit #updateReview' : 'updateReview'
	},

	editReview: function (event) {
		event.preventDefault();

		this.$el.find('#review').css('display', 'none');
		this.$el.find('#editReview').css('display', 'none');
		this.$el.find('#updateReview').css('display', 'inline-block');
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
	},

	updateReview: function () {
		console.log('hit updateReview')
		event.preventDefault();

		this.$el.find('#review').css('display', 'block');
		this.$el.find('#editReview').css('display', 'inline-block');
		this.$el.find('#updateReview').css('display', 'none');

		var reviewData = $(event.target).serializeJSON();

		this.model.save(reviewData, {
			success: function () {
				console.log('successfully updated');
			},
			error: function () {
				console.log('failed to update');
			}
		})
	}

});
