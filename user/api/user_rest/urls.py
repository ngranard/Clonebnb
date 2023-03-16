from django.urls import path, include
from .views import api_user_list, rental_list, rental_detail

urlpatterns= [
  path("users/", api_user_list, name="api_user_list"),
  path("rentals/", rental_list, name="rental_list"),
  path("rentals/<int:id>/", rental_detail, name="rental_detail"),

]
