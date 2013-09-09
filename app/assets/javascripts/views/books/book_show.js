Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

  events: {
		"submit #new-review-button": "newReview",
		"submit #create-review": "createReview"
	},

	createReview: function (event) {
		event.preventDefault();

		this.$el.find('#new-review-form').empty();

		var reviewData = $(event.currentTarget).serializeJSON();
		reviewData.review.book_id = this.model.get('book_id');

		console.log('currentUserId');
		console.log(Goodreadsclone.Store.currentUser);
		var currentReview = this.model.get('reviews').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (currentReview) {
			console.log('just update the fucking review')
			currentReview.save(reviewData, {
				wait: true,
				success: function (review, response, options) {
					console.log("saved successfully");
				},
				error: function (review, xhr, options) {
					console.log("error");
				}
			}
			);
		} else {
			console.log('no current review')
			this.model.get('reviews').create(reviewData, {
				wait: true,
				success: function (review, response, options) {
					console.log("saved successfully");
				},
				error: function (review, xhr, options) {
					console.log("error");
				}
			});
		}
	},

	newReview: function (event) {
		this.$el.find('#new-review-button').remove();
		this.$el.find('#new-review-form').append(JST['reviews/new']());

		var currentReview = this.model.get('reviews').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		var ratingView = new Goodreadsclone.Views.RatingShow({
			collection: this.model.get('reviews'),
			model: currentReview
		});

		this.$el.find('#new-review-rating').html(ratingView.render().$el);
	},

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

		var ratingView = new Goodreadsclone.Views.RatingShow({
			collection: this.model.get('reviews'),
			model: currentReview
		});
		this.$el.find('#currentRating').html(ratingView.render().$el);

		var reviewsView = new Goodreadsclone.Views.ReviewsIndex({
			collection: this.model.get('reviews')
		});
		this.$el.find('#reviews').html(reviewsView.render().$el);

		return this;
	}
});
