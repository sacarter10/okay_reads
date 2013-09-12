Goodreadsclone.Views.ShelfShow = Backbone.View.extend({

  template: JST['shelves/show'],

	events: {
		'click #remove-book' : "removeBook"
	},

	initialize: function () {
		this.collection = Goodreadsclone.Store.currentUser.get('reviews');
		this.options.shelfName = "Books You Have Read";
	},

	removeBook: function (event) {
		var bookRow = $(event.currentTarget).parent();
		bookRow.remove();

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
			shelfName: this.options.shelfName,
			reviews: this.collection
		}));

		this.collection.each( function (review) {
			var bookId = review.get('reviewed_book').id;
			var ratingsView = new Goodreadsclone.Views.RatingShow({ model: review });
			that.$el.find('#book' + bookId + ' #rating').html(ratingsView.render().$el);
		})

		return this;
	}
});
