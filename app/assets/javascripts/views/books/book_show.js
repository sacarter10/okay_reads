Goodreadsclone.Views.BookShow = Backbone.View.extend({

  template: JST['books/show'],

	events: {
		"click .stars": "makeRating"
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
				success: function (rating, response, options) {

					for (var i = 1; i <= rating.get('stars'); i++) {
						$('#star' + i).removeClass('unfilled');
						$('#star' + i).addClass('filled');
					}
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
	},

	render: function () {
		var currentRating = this.model.get('ratings').findWhere({
			user_id: Goodreadsclone.Store.currentUser.id
		});

		if (currentRating) {
			console.log(currentUsersRating)
			currentRating = currentRating.get('stars');
		} else {
			console.log('in else')
			currentRating = 0;
		}
		console.log(currentRating);

		this.$el.html(this.template({
			book: this.model,
			currentRating: currentRating
		}));

		return this;
	}


});
