$(document).ready(function() {
    EditView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            var template = Handlebars.templates['image'](imageData);
            this.$el.html(template);
        },
        events: {
            "submit": "imgSave",
            "click #fullsize-img": "fullSize",
            "click #back" : "back"
        },
        formToJSON: function(form) {
        	var formArray = $(form).serializeArray();
        	var json = {};
        	$.each(formArray, function() {
        		json[this.name] = this.value;
        	});
        	return json;
        },
        imgSave: function(e){    
        	e.preventDefault();
        	var imageObj = this.formToJSON($('#update-image'));
        	var url = "/colonel/utils/media/" + imageObj.id + "/";
        	
        	$.ajax({
        		method: 'PATCH',
        		url: url,
        		data: JSON.stringify(imageObj),
        		success: function() {
        			$('#update-success').show().delay(2000).fadeOut();
        		}
        	});    
        }
    });

    var edit_view = new EditView({
        el: $("#image_container")
    });

    $('button').tooltip({
	  trigger: 'click',
	  placement: 'bottom'
	});

	function setTooltip(btn, message) {
	  $(btn).tooltip('hide')
	    .attr('data-original-title', message)
	    .tooltip('show');
	}

	function hideTooltip(btn) {
	  setTimeout(function() {
	    $(btn).tooltip('hide');
	  }, 1000);
	}

	// Clipboard

	var clipboard = new Clipboard('button');

	clipboard.on('success', function(e) {
	  setTooltip(e.trigger, 'Copied!');
	  hideTooltip(e.trigger);
	});

	clipboard.on('error', function(e) {
	  setTooltip(e.trigger, 'Failed!');
	  hideTooltip(e.trigger);
	});
})