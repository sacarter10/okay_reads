Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

	events: {
		"click #currentStars": "makeRating"
	},

	makeRating: function (event) {
		event.preventDefault();
		var that = this;

		existingReview = this.model.get('reviews').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (existingReview) {
			existingReview.save({
				rating: $(event.target).parent().attr('id').slice(-1)
			}, {
				wait: true,
				success: function (review, response, options) {
					console.log("updated successfully");
				},
				error: function (review, xhr, options) {
					console.log(xhr);
				}
			})
			} else {
			this.model.get('reviews').create({
				rating: $(event.target).parent().attr('id').slice(-1), //id is in format "star1"
				book_id: that.model.get('id')
			}, {
				wait: true,
				success: function (review, response, options) {
					console.log("saved successfully");
				},
				error: function (review, xhr, options) {
					console.log(xhr);
				}
			});
		}
	},

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		var currentReview = this.model.get('reviews').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (currentReview) {
			var currentRating = currentReview.get('rating');
		} else {
			currentRating = 0;
		}

		this.$el.html(this.template({
			book: this.model
		}));

	  for (var i = 1; i <= currentRating; i++) {
		  this.$el.find('#currentStars #star' + i).removeClass('unfilled');
		  this.$el.find('#currentStars #star' + i).addClass('filled');
	  }
		var reviewsView = new Goodreadsclone.Views.ReviewsIndex({ collection: this.model.get('reviews') });

		this.$el.find('.reviews').html(reviewsView.render().$el);
		return this;
	}


});
