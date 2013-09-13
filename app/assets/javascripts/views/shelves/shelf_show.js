Goodreadsclone.Views.ShelfShow = Backbone.View.extend({

  template: JST['shelves/show'],

	events: {
		'click #remove-book' : "removeBook"
	},

	initialize: function () {
		if (this.options.shelfName === "to_read") {
			this.collection = Goodreadsclone.Store.currentUser.get('book_flags');
			this.shelfName = "Books You Want to Read";
		} else if (this.options.shelfName === "reviewed") {
			this.collection = Goodreadsclone.Store.currentUser.get('reviews');
			this.shelfName = "Books You Have Read";
		}
	},

	removeBook: function (event) {
		var bookRow = $(event.currentTarget).parent();
		bookRow.remove();

		debugger

		var bookId = parseInt(bookRow.attr('id').slice(4)) //row ids in format 'book1', 'book2'

		this.collection.findByBookId(bookId).destroy({
			success: function () {
				console.log('success');
			},
			error: function () {
				console.log('failure');
			}
		});

	},

	render: function () {
		var that = this;

		this.$el.html(this.template({
			shelfName: this.shelfName,
			collection: this.collection //reviews or bookFlags
		}));

		this.collection.each( function (reviewOrFlag) {
			if (that.options.shelfName === "to_read") {
				var review = reviewOrFlag.get('book').get('review');
				var bookId = reviewOrFlag.get('book').id;
			} else {
				var review = reviewOrFlag;
				var bookId = review.get('book').id;
			}

			var ratingsView = new Goodreadsclone.Views.RatingShow({
				model: review,
				collection: Goodreadsclone.Store.currentUser.get('reviews')
			});
			that.$el.find('#book' + bookId + ' #rating').html(ratingsView.render().$el);
		})

		return this;
	}
});
