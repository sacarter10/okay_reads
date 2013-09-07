Goodreadsclone.Views.ReviewsIndex = Backbone.View.extend({

  template: JST['reviews/index'],

	events: {
		"submit #new-review": "newReview",
		"submit #create-review": "createReview"
	},

	createReview: function (event) {
		event.preventDefault();

		var reviewData = $(event.currentTarget).serializeJSON();
		console.log(this.collection);
		reviewData.review.book_id = this.collection.book_id;

		this.collection.create(reviewData, {
			wait: true,
			success: function (review, response, options) {
				console.log("saved successfully");
			},
			error: function (review, xhr, options) {
				console.log("error");
			}
		});
	},

	initialize: function () {
		this.listenTo(this.collection, 'change', this.render);
		this.listenTo(this.collection, 'add', this.render);
	},

	newReview: function (event) {
		this.$el.append(JST['reviews/new']());
		this.$el.find('#new-review').remove();
	},

	render: function () {
		var that = this;
		this.$el.html(this.template({ reviews: this.collection }));

		this.collection.each( function (review) {
			var showView = new Goodreadsclone.Views.ReviewShow({model: review});
			that.$el.find('#review-show').append(showView.render().$el);
		});

		return this;
	}

});
