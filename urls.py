from django.conf.urls import patterns, url
from apps.media import views

urlpatterns = patterns('',
	url(r'^$', views.home, name='home'),
	url(r'^edit/(?P<image_id>\d+)/$', views.edit, name='edit'),
)
