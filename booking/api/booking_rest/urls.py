from django.urls import path
from .views import api_bookings, api_booking, api_finish_booking, \
  api_book_booking, api_cancel_booking

urlpatterns = [
  path('bookings/', api_bookings, name='api_bookings'),
  path('bookings/<int:pk>/', api_booking, name='api_booking'),
  path('bookings/<int:pk>/finish/',
         api_finish_booking, name='api_finish_booking'),
  path('bookings/<int:pk>/book/',
         api_book_booking, name='api_book_booking'),
  path('bookings/<int:pk>/cancel/',
         api_cancel_booking, name='api_cancel_booking'),
]
