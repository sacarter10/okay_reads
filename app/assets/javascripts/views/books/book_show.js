Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

	events: {
		"click .stars": "makeRating",
		"submit #new-review": "newReview"
	},

	newReview: function (event) {
		// this.model.get('reviews').create({
// 			stars: $(event.target).parent().attr('id').slice(-1), //id is in format "star1"
// 			book_id: that.model.get('id')
// 		}, {
// 			wait: true,
// 			success: function (rating, response, options) {
// 				console.log("saved successfully");
// 			},
// 			error: function (rating, xhr, options) {
// 				console.log(xhr);
// 			}
	},

	makeRating: function (event) {
		var that = this;

		existingRating = this.model.get('ratings').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (existingRating) {
			existingRating.save({
				stars: $(event.target).parent().attr('id').slice(-1)
			}, {
				wait: true,
				success: function (rating, response, options) {
					console.log("updated successfully");
				},
				error: function (rating, xhr, options) {
					console.log(xhr);
				}
			})
			} else {
			this.model.get('ratings').create({
				stars: $(event.target).parent().attr('id').slice(-1), //id is in format "star1"
				book_id: that.model.get('id')
			}, {
				wait: true,
				success: function (rating, response, options) {
					console.log("saved successfully");
				},
				error: function (rating, xhr, options) {
					console.log(xhr);
				}
			});
		}
	},

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model.get('ratings'), 'change', this.render);
		this.listenTo(this.model.get('ratings'), 'add', this.render);
	},

	render: function () {
		var currentRating = this.model.get('ratings').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (currentRating) {
			currentRating = currentRating.get('stars');
		} else {
			currentRating = 0;
		}

		this.$el.html(this.template({
			book: this.model
		}));

	  for (var i = 1; i <= currentRating; i++) {
		  this.$el.find('#star' + i).removeClass('unfilled');
		  this.$el.find('#star' + i).addClass('filled');
	  }

		return this;
	}


});
