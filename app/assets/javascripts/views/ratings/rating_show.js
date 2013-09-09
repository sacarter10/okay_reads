Goodreadsclone.Views.RatingShow = Backbone.View.extend({
	template: JST['ratings/show'],

	events: {
		"click .stars": "makeRating"
	},

	initialize: function () {
		if (this.model) {
			this.listenTo(this.model, "change", this.render);
		};

		if (this.collection) {
			this.listenTo(this.collection, "add", this.render);
		};
	},

	makeRating: function (event) {
		var that = this;

		var existingReview = this.model;
		if (existingReview) {
		//Save will create a new model if it doesn't exist! but...you'd need to add it to collection by hand???
			existingReview.save({
				rating: $(event.target).parent().attr('id').slice(-1)
			}, {
				wait: true,
				success: function (review, response, options) {
					console.log("updated successfully");
				},
				error: function (review, xhr, options) {
					console.log('update failed');
					console.log(review);
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
					console.log('now the collection looks like')
					console.log(that.collection)
				},
				error: function (review, xhr, options) {
					console.log('create failed')
					console.log(xhr);
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