Goodreadsclone.Views.Topbar = Backbone.View.extend({
	template: JST['navigation/topbar'],

	events: {
		'click #logout' : 'logout' 
	},

	logout: function (event) {
		$.ajax({
			url: "/session",
			type: "Delete",
			success: function(response){
				console.log('success')
			},
			error: function(){
				alert("There was an error in logging out. Please try again.");
			},
		});
	},
})