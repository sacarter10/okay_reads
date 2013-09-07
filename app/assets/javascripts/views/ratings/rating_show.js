Goodreadsclone.Views.RatingShow = Backbone.View.extend({
	template: JST['ratings/show'],

	events: {
		"click .stars": "makeRating"
	},

	makeRating: function (event) {
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

	render: function () {
		this.$el.html(this.template());

	  for (var i = 1; i <= this.options.rating; i++) {
		  this.$el.find('#star' + i).removeClass('unfilled');
		  this.$el.find('#star' + i).addClass('filled');
	  }

	  return this;
	}
});