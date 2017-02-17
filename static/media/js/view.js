$(document).ready(function() {
	
    var Image = Backbone.Model.extend({});

	var ImageCollection = Backbone.Collection.extend({
		model: Image
	});

	var ImageView = Backbone.View.extend({
		el: '#main',
		render: function() {
			var self = this;
			var querySet = new h360.Query("utils.media");
    		querySet.orderBy('-id').slice(0,20).request({
    			success: function(data) {
                    $('#image-results').append('Recently Uploaded Images');
    				var image = new ImageCollection(data);
    				image.each(function(item) {
    					var itemview = new ItemView({
    						model: item
    					});
    					$('#images').append(itemview.render().el);
    				});
    			}
    		});
    	},
    });

    var SearchView = Backbone.View.extend({
        el: '#main',
        events: {
            'submit' : 'render'
        },
        render: function(e) {
            e.preventDefault();
            var self = this;
            var searchTerm = $("#search_input").val().toLowerCase();
            var querySet = new h360.Query("utils.media");
            var q = Q.Q({filename__icontains: searchTerm})
                    .or({title__icontains: searchTerm});
            
            if (searchTerm == '') {
                $('#search-error').show();
                $('#no-results').hide();
                $('#short-error').hide();
                $('#image-results').empty();
                querySet = '';
            }

            else if (searchTerm.length <= 3) {
                $('#short-error').show();
                $('#no-results').hide();
                $('#search-error').hide();
                queryset = '';
            }

            else {
                $('#search-error').hide();
                $('#short-error').hide();
                $('#num-results').show();
                querySet.filter(q).orderBy('-id').distinct('id').request({
                    success: function(data) {
                        var size = data.length
                        if(size == 0) {
                            $('#image-results').empty();
                            $('#no-results').show();
                            $('#images').empty();
                        }
                        else {
                            $('#no-results').hide();
                            $('#images').empty();
                            $('#image-results').empty().append(size + ' results found<br><a href="/media/">View Recently Uploaded Images</a>');
                            var image = new ImageCollection(data);
                            image.each(function(item) {
                                var itemview = new ItemView({
                                    model: item
                                });

                                $('#images').append(itemview.render().el);
                            });
                        }
                    }
                });
            }  
        },
        search_key: function(event) {
            if (event.keyCode == 13) {
                $("#search_button").click();
            }
        }
    });

    var ItemView = Backbone.View.extend({
    	template: _.template($('#image-template').html()),
    	render: function() {
    		this.$el.html(this.template(this.model.attributes));
    		return this;
    	}
    });
    
    var imageview = new ImageView();
    var searchview = new SearchView();
    
    if ($('#search_input').val()) {
        $('#search_button').trigger('click');
    }
    else {
        imageview.render();
    }    
});
