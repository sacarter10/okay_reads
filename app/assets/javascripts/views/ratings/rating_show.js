Goodreadsclone.Views.RatingShow = Backbone.View.extend({
	template: JST['ratings/show'],

	events: {
		"click .stars .editable": "makeRating"
	},

	initialize: function () {
		if (this.model) {
			this.listenTo(this.model, "change", this.render);
		};

		if (this.collection) {
			this.listenTo(this.collection, "sync", this.render);
		};
	},

	makeRating: function (event) {
		var that = this;

		var existingReview = this.model;

		if (existingReview) {
			existingReview.save({
				rating: $(event.target).parent().attr('id').slice(-1),
				url: "/reviews"
			}, {
				wait: true,
				success: function (review, response, options) {
					if (this.collection) {
						this.collection.add(review);
					}
				},
				error: function (review, xhr, options) {
					console.log('update failed');
					console.log(xhr.responseText);
				}
			})
			} else {
			this.collection.create({
				rating: $(event.target).parent().attr('id').slice(-1), //id is in format "star1"
				book_id: that.collection.book_id
			}, {
				wait: true,
				success: function (review, response, options) {
					console.log("saved successfully");
					// that.collection.trigger('sync');
					that.model = review;
					console.log(that.collection)
				},
				error: function (review, xhr, options) {
					console.log(xhr.responseText);
				}
			});
		}
	},

	render: function () {
		this.$el.html(this.template());

		if (this.model) {
		  for (var i = 1; i <= this.model.get('rating'); i++) {
			  this.$el.find('#star' + i).removeClass('unfilled');
			  this.$el.find('#star' + i).addClass('filled');
		  }
	  }

	  return this;
	}
});