(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['image'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dest_id : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.itin_id : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hotel_id : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.offer_hotel : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.auction_hotel : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.itin_inline_id : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div><h5>Destinations -"
    + alias4(((helper = (helper = helpers.dest_name || (depth0 != null ? depth0.dest_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dest_name","hash":{},"data":data}) : helper)))
    + "</h5></div>\n                    <div><a href='/destinations/edit/"
    + alias4(((helper = (helper = helpers.dest_id || (depth0 != null ? depth0.dest_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dest_id","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on harper360</a> &nbsp; <a href='http://andrewharper.com/destinations/resource/"
    + alias4(((helper = (helper = helpers.dest_id || (depth0 != null ? depth0.dest_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dest_id","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on andrewharper.com</a><div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div><h5>Itineraries -"
    + alias4(((helper = (helper = helpers.itin_title || (depth0 != null ? depth0.itin_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itin_title","hash":{},"data":data}) : helper)))
    + "<h5></div>\n                    <div><a href='/itineraries/edit/"
    + alias4(((helper = (helper = helpers.itin_id || (depth0 != null ? depth0.itin_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itin_id","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on harper360</a> &nbsp; <a href='http://andrewharper.com/itinerary/"
    + alias4(((helper = (helper = helpers.itin_slug || (depth0 != null ? depth0.itin_slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itin_slug","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on andrewharper.com</a><div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div><h5>Hotels -"
    + alias4(((helper = (helper = helpers.hotel_title || (depth0 != null ? depth0.hotel_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hotel_title","hash":{},"data":data}) : helper)))
    + "</h5></div>\n                    <div><a href='/hotels/edit/hotel/"
    + alias4(((helper = (helper = helpers.hotel_id || (depth0 != null ? depth0.hotel_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hotel_id","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on harper360</a> &nbsp; <a href='http://andrewharper.com/hotels/"
    + alias4(((helper = (helper = helpers.hotel_slug || (depth0 != null ? depth0.hotel_slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hotel_slug","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on andrewharper.com</a><div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div><h5>Offers: "
    + alias4(((helper = (helper = helpers.offer_hotel || (depth0 != null ? depth0.offer_hotel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"offer_hotel","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.offer_title || (depth0 != null ? depth0.offer_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"offer_title","hash":{},"data":data}) : helper)))
    + "</h5></div>\n                    <div><a href='/offers/edit/"
    + alias4(((helper = (helper = helpers.offer_id || (depth0 != null ? depth0.offer_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"offer_id","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View image on Harper360</a> &nbsp; <a href='http://andrewharper.com/offers/special-offers/' target=\"_blank\">View image on andrewharper.com</a><div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div><h5>Auctions: "
    + alias4(((helper = (helper = helpers.auction_hotel || (depth0 != null ? depth0.auction_hotel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"auction_hotel","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.room_title || (depth0 != null ? depth0.room_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"room_title","hash":{},"data":data}) : helper)))
    + "</h5></div>\n                    <div><a href=\"/packages/edit-package/"
    + alias4(((helper = (helper = helpers.package_id || (depth0 != null ? depth0.package_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package_id","hash":{},"data":data}) : helper)))
    + "/\" target=\"_blank\">View on Harper360</a></div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div><h5>Itineraries -"
    + alias4(((helper = (helper = helpers.itin_inline_title || (depth0 != null ? depth0.itin_inline_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itin_inline_title","hash":{},"data":data}) : helper)))
    + "</h5></div>\n                    <div><a href='/itineraries/edit/"
    + alias4(((helper = (helper = helpers.itin_inline_id || (depth0 != null ? depth0.itin_inline_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itin_inline_id","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on harper360</a> &nbsp; <a href='http://andrewharper.com/itinerary/"
    + alias4(((helper = (helper = helpers.itin_inline_slug || (depth0 != null ? depth0.itin_inline_slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itin_inline_slug","hash":{},"data":data}) : helper)))
    + "/' target=\"_blank\">View on andrewharper.com</a><div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                <div>A reference for this image could not be found</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\n<div class=\"row\">  \n    <div class=\"col-md-6\">\n        <div class=\"expand-icon\">\n            <a href=\"#image-fullsize\" data-toggle=\"lightbox\"><i class=\"fa fa-expand fa-2x full-size\" aria-hidden=\"true\" aria-label=\"Expand Image\"></i></a>\n        </div>    \n        <img src=\""
    + alias4(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\" class=\"responsive image\"/>\n    </div>    \n    <div class=\"col-md-6 image-info\">\n        <div class=\"imageref-container\">\n            <div class=\"imageref-body\">\n                <h4>Image Reference</h4>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.imageref : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div>\n            <br> Width: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.width : stack1), depth0))
    + "\n            <br> Height: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.height : stack1), depth0))
    + "\n        </div>\n        <div class=\"form-div\">        \n            <form id=\"update-image\">\n                <div class=\"input-group input-group-lg\">\n                    <label>URL:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"url\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" readonly>\n                    <button class=\"btn\" data-clipboard-target=\"#url\"><span class=\"fa fa-clipboard\"></span></button>\n                </div>\n                <input name=\"id\" type=\"hidden\" value="
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.id : stack1), depth0))
    + ">\n                <div class=\"input-group input-group-lg\">\n                    <label>Title</label>\n                    <input type=\"text\" class=\"form-control\" name=\"title\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" required>\n                    <div class=\"alert alert-danger search-alert\" id=\"update-fail\">* This field cannot be blank</div>\n                </div>\n                <div class=\"input-group input-group-lg\">\n                    <label>Alt Text</label>\n                    <input type=\"text\" class=\"form-control\" name=\"alt\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\n                </div>\n                <div class=\"input-group input-group-lg\">\n                    <label>Caption</label>\n                    <input type=\"text\" class=\"form-control\" name=\"caption\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.caption : stack1), depth0))
    + "\">\n                </div>\n                <div class=\"input-group input-group-lg\">\n                    <label>Copyright</label>\n                    <input type=\"text\" class=\"form-control\" name=\"credit\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.credit : stack1), depth0))
    + "\">\n                </div>\n                <div class=\"input-group input-group-lg\">\n                    <label>Keywords</label>\n                    <input type=\"text\" class=\"form-control\" name=\"keywords\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.keywords : stack1), depth0))
    + "\">\n                </div>\n                <div class=\"update-button\">\n                    <div class=\"btn-toolbar\">\n                        <!-- UTILITY BUTTONS -->\n                        <div class=\"util-buttons\">\n                            <div class=\"btn-group btn-group-sm\"><button class=\"btn btn-default\" type=\"submit\" id=\"imgSave\"><i class=\"fa fa-floppy-o fa-lg\" aria-hidden=\"true\" aria-label=\"Save\"></i> Update Image</button></div>\n                        </div>\n                    </div>\n                </div>\n                <div class='alert alert-success search-alert' id='update-success' style='width: 200px;font-weight: bold'>Image Updated!</div>\n            </form>\n        </div>\n    </div>\n</div>\n<div id=\"image-fullsize\" class=\"lightbox hide fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class='lightbox-content'>\n        <img src=\""
    + alias4(((helper = (helper = helpers.fullsize_url || (depth0 != null ? depth0.fullsize_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullsize_url","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"lightbox-caption\"><p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p></div>\n    </div>\n</div>";
},"useData":true});
})();