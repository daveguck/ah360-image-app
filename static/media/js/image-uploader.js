var h360 = h360 || {};
h360.util = h360.util || {};

h360.util.uploaderOptions = {
    'type':{
        'HOTEL_UPLOADER': 0,
        'DESTINATIONS_UPLOADER': 1,
        'OFFERS_UPLOADER': 3,
        'GENERAL_UPLOADER': 2
    }
};

h360.util.Uploader = Backbone.View.extend({
    templates: {
        'upload': Handlebars.templates['image_upload/upload']
    },

    menuConfiguration: {
        'options': {
            'option1': {'name': 'Editorial Banner', 'value': 1},
            'option2': {'name': 'Panoramic Banner - 1400 (x583)', 'value': 2},
            'option3': {'name': 'Destination Banner 1000 (x400)', 'value': 3},
            'option4': {'name': 'Edit Index - 779x519', 'value': 4},
            'option5': {'name': 'Travel Asset Index - 555 (x370)', 'value': 5},
            'option6': {'name': 'Inline Image 1000 long edge', 'value': 6},
            'option7': {'name': 'Full Screen Slideshow 1200 wide', 'value': 7},
            'option8': {'name': 'Inline Slideshow 1000 long edge', 'value': 8},
            'option9': {'name': 'Full Screen Banner 1500 (x833)', 'value': 9},
            'option10': {'name': 'Special Offer Image - 555 (x370)', 'value': 5},
            'option11': {'name': 'No Resize', value: 10}
        },

        'types': [
            {'name': "HOTEL UPLOADER", 'options': [2, 7, 5, 8]},
            {'name': "DESTINATIONS UPLOADER", 'options': [3, 6, 8, 5]},
            {'name': "GENERAL UPLOADER", 'options': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},
            {'name': "SPECIAL OFFER UPLOADER", 'options': [10]}
        ]
    },

    endpoints: {
        'upload': "/images/upload/",
        'exif': "/images/exif/"
    },

    events: {
        'change [data-file]' : 'imageChosen',
        'click [data-upload]': 'upload',
        'click [data-cancel]': 'cancelUpload',
        'click [data-choose-file]': 'chooseFile'
    },

    initialize: function(options) {
        _.bindAll(this, 'render', 'setUploaderType', 'clearUploader', 'cancelUpload', 'chooseFile');

        this._dataImage = null;
        this.uploaderMenu = {};
        this.uploaderType = 0;
        this.file = null;
        this.isUploading = false;

        this.template = (typeof options.template === 'undefined') ? this.templates.upload : options.template;
        if('type' in options) {
            this.setUploaderType(options.type);
        }
        else {
            this.setUploaderType(h360.util.uploaderOptions.type.GENERAL_UPLOADER)
        }

        // setup optional callbacks
        // called when the upload has started
        this.onBeginUpload = (typeof options.onBeginUpload === 'function') ? options.onBeginUpload : null;
        // when the image has finished uploading
        this.onUpload = (typeof options.onUpload === 'function') ? options.onUpload : null;
        // when a file has been selected (show a preview)
        this.onSelect = (typeof options.onSelect === 'function') ? options.onSelect : null;
        // when the file upload has been canceled
        this.onCancel = (typeof options.onCancel === 'function') ? options.onCancel : null;

        this.render();
    },


    setUploaderType: function(type) {
        this.uploaderMenu = this.menuConfiguration.types[type].options;
        this.uploaderType = type;
    },

    clearUploader: function() {
        // based on the uploader type, clear the dialog
        switch(this.uploaderType) {
            case h360.util.uploaderOptions.type.DESTINATIONS_UPLOADER:
            case h360.util.uploaderOptions.type.HOTEL_UPLOADER:
            case h360.util.uploaderOptions.type.GENERAL_UPLOADER:
            case h360.util.uploaderOptions.type.OFFERS_UPLOADER:
                this.file = null;
                this._dataImage = null;
                var self = this;
                this.$el.find(".form-fields").hide("fast", function(){
                    self.render();
                });

                break;
        }
    },

    chooseFile: function(event) {
        // manually fire the onlcick of the file input to force open the file browser window
        this.$el.find('[data-file]').trigger('click');
    },

    cancelUpload: function() {
        this.clearUploader();
        if(this.onCancel != null) {
            this.onCancel();
        }
        return false;
    },

    upload: function(event) {
        if(this.file == null) {
            return false;
        }

        this.isUploading = true;
        if(this.onBeginUpload != null) {
            this.onBeginUpload();
        }

        var self = this;
        var formData = new FormData($(event.target).closest("form")[0]);
        formData.append('filesize', this.file.size);

        this.$el.find('.alert').hide("fast", function(){
            $(this).html("");
        });

        this.$el.find('button').attr('disabled', true);


        $.ajax({
            url: self.endpoints.upload,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            type: "POST",
            success: function(data) {
//                resetting the error and success fields in case they are still showing from a previous upload attempt.
                self.$el.find(".alert-error").hide();
                self.$el.find(".alert-success").hide();
                if("error" in data) {
                    self.$el.find(".alert-error").html(data.error).show();
                }
                if("success" in data) {
                    self.$el.find(".alert-success").html(data.success).show();
                    self.clearUploader();
                }
                self.$el.find(".form-fields").show("fast");
                self.$el.find('button').attr('disabled', false);
                self.isUploading = false;

                // send back success/fail message
                if(self.onUpload != null) {
                    self.onUpload(data);
                }
            }
        });

        return false;
    },

    imageChosen: function(event) {
        if(event.target.files.length == 0) {
            return false;
        }

        var self = this;
        var file = event.target.files[0];
        var preview = this.$el.find("[data-image-preview]");

        if(file.type.indexOf('image') == -1) {
            alert("The file is not an image");
            if(this.file == null) {
                $(event.target).val("");
                preview.attr("src", "");
                this.clearUploader();
            }
            return;
        }

        this.$el.find(".form-fields").show("fast");
        this.file = file;

        // clear errors
        this.$el.find('.alert').hide("fast", function(){
            $(this).html("");
        });

        this.$el.find('[data-file-name]').html('<em><strong>'+file.name+'</strong></em>');
        this.$el.find("[name=filename]").val(file.name.toLowerCase().replace(/ /g, "-"));

        var formData = new FormData($(event.target).closest("form")[0]);

        this.$el.find('button').attr('disabled', true);

        $.ajax({
            url: self.endpoints.exif,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            type: "POST",
            success: function(data) {
                if (data.Copyright) {
                    self.$el.find("[name=credit]").val(data.Copyright);
                } else {
                    self.$el.find("[name=credit]").val('');
                }
                if (data.ImageDescription) {
                    self.$el.find("[name=caption]").val(data.ImageDescription);
                } else {
                    self.$el.find("[name=caption]").val('');
                }
                if (data.Keywords) {
                    self.$el.find("[name=keywords]").val(data.Keywords);
                } else {
                    self.$el.find("[name=keywords]").val('');
                }
                self.$el.find('button').attr('disabled', false);
                if(self.onSelect != null) {
                    self.onSelect(data);
                }
            }
        });

        preview.attr("src", window.URL.createObjectURL(file));
        preview.show();
    },

    render: function() {
        this.$el.html(this.template(this._dataImage));

        // generate select menu
        var $selectMenu = this.$el.find('[name="aspect"]');
        for(var i=0; i<this.uploaderMenu.length;i++) {
            var menu = this.menuConfiguration.options['option' + this.uploaderMenu[i]];
            $selectMenu.append('<option value="' + menu.value + '">'+menu.name+'</option>');
        }

        return this.$el;
    }
});
