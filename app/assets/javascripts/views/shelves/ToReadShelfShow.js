Goodreadsclone.Views.ToReadShelfShow = Backbone.View.extend({

  template: JST['shelves/show'],

	events: {
		'click #remove-book' : "removeBook"
	},

	initialize: function () {
		this.collection = Goodreadsclone.Store.currentUser.get('to_read_books');
		this.options.shelfName = "Books You Want to Read";
	},

	removeBook: function (event) {
		var bookRow = $(event.currentTarget).parent();
		bookRow.remove();

		$.ajax({
			url: "/book_flags",
			type: "",
			data: {
				book_flag: {
					book_id: this.model.id,
					user_id: Goodreadsclone.Store.currentUser.id
				}
			},
			success: function (response, status, xhr) {
				console.log(status);
			}, error: function (xhr, status, errorThrown) {
				console.log(status);
			}
		});
	},

	render: function () {
		this.$el.html(this.template({
			shelfName: this.options.shelfName,
			books: this.collection
		}));

		return this;
	}
});
