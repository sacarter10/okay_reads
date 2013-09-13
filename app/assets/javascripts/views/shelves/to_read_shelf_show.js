Goodreadsclone.Views.ToReadShelfShow = Backbone.View.extend({

  template: JST['shelves/to_read_show'],

	events: {
		'click #remove-book' : "removeBook"
	},

	initialize: function () {
		this.collection = Goodreadsclone.Store.currentUser.get('reviews');
	},
	
	removeBook: function (event) {
		var bookRow = $(event.currentTarget).parent();
		bookRow.remove();

		
	},

	render: function () {
		console.log('in to read render!')
		this.$el.html(this.template({
			shelfName: "Books You Want to Read",
			bookFlags: this.collection
		}));

		return this;
	}
});
