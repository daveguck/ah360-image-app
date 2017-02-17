from django.core import urlresolvers
from django import http
from django.shortcuts import render
from django.conf import settings
from django.core.urlresolvers import reverse
import json
from ahutils.colonel.colonel_api import Model, Q


def home(request):
    return render(request, 'media/home.html')


def edit(request,image_id):
	media = Model('utils.media')
	data = media.get(id=image_id).request()
	image_url = "//s3.amazonaws.com/" + data["s3_bucket"] + "/desktop/" + data["file_root"] + "_md" + data["file_ending"]
	fullsize_url = "//s3.amazonaws.com/" + data["s3_bucket"] + "/desktop/" + data["file_root"] + "_lg" + data["file_ending"]
	context = {
		"image" : data,
		"image_url" : image_url,
		"fullsize_url" : fullsize_url,		
	}
	image_loc = imageref(image_id)
	context.update(image_loc)
	context_json = json.dumps(context)
	return render(request, 'media/edit.html', {'context_json':context_json})

def imageref(image_id):
	image_dict = {}
	batch = Model.batch_request(
		auction = Model('auctions.room').get(image_id=image_id).values_list('id','asset_id','title'), 
		offer = Model('offers.specialoffer').get(banner_id=image_id).values_list('id','title'),
		dest = Model('destinations.destination').get(Q(banner_media_id=image_id) | Q(index_image_id=image_id)).values_list('id','name'),
		itin = Model('itineraries.itinerary').get(Q(banner_id=image_id) | Q(index_image_id=image_id)).values_list('id','slug','title'),
		asset_img = Model('travel.travelimage').get(image_id=image_id).values_list('asset_id'),		
		widget_id = Model('itineraries.imagelist').get(image_id=image_id).values_list('widget_id')
		)
	if batch.widget_id.data:
		widget_id = batch.widget_id.data[0]
		content_block = Model('itineraries.blockwidget').get(widget_id=widget_id, content_type_id=254).values_list('content_block_id').request()
		itin_id = Model('itineraries.itineraryblock').get(content_block_id=content_block).values_list('itinerary_id').request()
		itin_inline = Model('itineraries.itinerary').filter(id=itin_id).values_list('id','slug','title').request()
	else:
		itin_inline = ''

	if batch.offer.data:
		offer_title = batch.offer.data[1]
		offer_id = batch.offer.data[0]		
		travelasset_id = Model('offers.specialoffer_assets').get(specialoffer_id=offer_id).values_list('travelasset_id').request()		
		offer_hotel = Model('travel.hotelpage').get(asset_id=travelasset_id).values_list('title').request()
	else:
		offer_title = ''
		offer_id = ''
		offer_hotel = ''
		

	if batch.auction.data:
		room_id = batch.auction.data[0]
		asset_id = batch.auction.data[1]
		room_title = batch.auction.data[2]
		package_id = Model('auctions.packageroom').get(room_id=room_id).values_list('package_id').request()
		auction_hotel = Model('travel.hotelpage').get(asset_id=asset_id).values_list('title').request()
	else:
		room_title = ''
		package_id = ''
		auction_hotel = ''
	
	if batch.asset_img.data:
		asset_id = batch.asset_img.data[0]
		hotel = Model('travel.hotelpage').filter(asset_id=asset_id).values_list('id','slug','title').request()
	else:
		hotel = ''

	if batch.dest.data:
		image_dict['dest_id'] = batch.dest.data[0]
		image_dict['dest_name'] = batch.dest.data[1]	
	if batch.itin.data:
		image_dict['itin_id'] = batch.itin.data[0]
		image_dict['itin_slug'] = batch.itin.data[1]
		image_dict['itin_title'] = batch.itin.data[2]
	if hotel:
		image_dict['hotel_id'] = hotel[0][0]
		image_dict['hotel_slug'] = hotel[0][1]
		image_dict['hotel_title'] = hotel[0][2]
	if auction_hotel:
		image_dict['room_title'] = room_title
		image_dict['package_id'] = package_id
		image_dict['auction_hotel'] = auction_hotel
	if offer_hotel:
		image_dict['offer_id'] = offer_id
		image_dict['offer_title'] = offer_title
		image_dict['offer_hotel'] = offer_hotel
	if itin_inline:
		image_dict['itin_inline_id'] = itin_inline[0][0]
		image_dict['itin_inline_slug'] = itin_inline[0][1]
		image_dict['itin_inline_title'] = itin_inline[0][2]

	if image_dict:
		image_dict['imageref'] = True
	else:
		image_dict['imageref'] = False

	return image_dict
