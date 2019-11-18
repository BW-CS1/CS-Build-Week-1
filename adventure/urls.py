from django.conf.urls import url
from . import api

urlpatterns = [
    url('hello_world', api.hello_world),
    url('init', api.initialize),
    url('move', api.move),
    url('say', api.say),
]