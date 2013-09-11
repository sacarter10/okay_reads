Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

  events: {
		"click #new-review-button": "newReview",
		"submit #create-review": "createReview",
		"click #want-to-read": "addWantToRead"
	},

	addWantToRead: function (event) {
		console.log('hit want to read');
		event.preventDefault();

		$('#want-to-read').attr('disabled', 'disabled');
		$.ajax({
			url: "/book_flags",
			type: "POST",
			data: {
				book_flag: {
					book_id: this.model.id,
					user_id: Goodreadsclone.Store.currentUser.id
				}
			},
			success: function (response, status, xhr) {
				console.log(status);
			}, error: function (xhr, status, errorThrown) {
				console.log(status);
			}
		});
	},

	createReview: function (event) {
		event.preventDefault();
		var that = this;

		var reviewData = $(event.currentTarget).serializeJSON();
		reviewData.review.book_id = this.model.get('book_id');

		var currentReview =
			this.model.get('reviews').findByUserId(Goodreadsclone.Store.currentUser.id);


		if (currentReview) {
			currentReview.save(reviewData, {
				wait: true,
				success: function (review, response, options) {
					that.$el.find('#new-review-form').empty();
					console.log("saved successfully");
				},
				error: function (review, xhr, options) {
					console.log("error");
				}
			}
			);
		} else {
			this.model.get('reviews').create(reviewData, {
				wait: true,
				success: function (review, response, options) {
					that.$el.find('#new-review-form').empty();
					console.log("saved successfully");
				},
				error: function (review, xhr, options) {
					alert(xhr.responseJSON[0]);
				}
			});
		}
	},

	newReview: function (event) {
		event.preventDefault();

		this.$el.find('#new-review-button').remove();
		this.$el.find('#new-review-form').append(JST['reviews/new']());

		var currentReview =
			this.model.get('reviews').findByUserId(Goodreadsclone.Store.currentUser.id);

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

		// find in the current user's rating for this book	and fill in rating appropriately
		var currentReview =
			this.model.get('reviews').findByUserId(Goodreadsclone.Store.currentUser.id);

		var ratingView = new Goodreadsclone.Views.RatingShow({
			collection: this.model.get('reviews'),
			model: currentReview // null if current user hasn't rated book
		});
		this.$el.find('#currentRating').html(ratingView.render().$el);

		// append index of all reviews for this book
		var reviewsView = new Goodreadsclone.Views.ReviewsIndex({
			collection: this.model.get('reviews')
		});
		this.$el.find('#reviews').html(reviewsView.render().$el);

		// if this book is already on user's "Want to Read" shelf, disable button


		return this;
	}
});
