from django.shortcuts import render
from .models import Booking, UserVO, RentalVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from .encoders import BookingEncoder


# Create your views here.


def api_bookings(request, pk=None):
    if (request.method == 'GET' and pk is None):
        bookings = Booking.objects.all()
        return JsonResponse({"bookings": bookings}, encoder=BookingEncoder, safe=False)
    elif (request.method == 'GET' and pk is not None):
        guest = UserVO.objects.get(id=pk)
        bookings = Booking.objects.filter(guest=guest)
        return JsonResponse(booking, encoder=BookingEncoder, safe=False)

    elif (request.method == 'POST'):
        content = json.loads(request.body)
        user = UserVO.objects.get(id=content['guest_id'])
        rental = RentalVO.objects.get(id=content['rental_id'])
        content['guest'] = user
        content['rental'] = rental
        booking = Booking.objects.create(**content)
        return JsonResponse(booking, encoder=BookingEncoder, safe=False)


def api_booking(request, pk):
    if request.method == 'GET':
        booking = Booking.objects.get(id=pk)
        return JsonResponse(booking, encoder=BookingEncoder, safe=False)
    elif request.method == 'PUT':
        content = json.loads(request.body)
        booking = Booking.objects.get(id=pk)
        guest = UserVO.objects.get(id=content['guest_id'])
        rental = RentalVO.objects.get(id=content['rental_id'])
        booking.start_date = content['start_date']
        booking.end_date = content['end_date']
        booking.num_guests = content['num_guests']
        booking.has_pets = content['has_pets']
        booking.status = content['status']
        booking.guest = guest
        booking.rental = rental
        booking.save()
        return JsonResponse(booking, encoder=BookingEncoder, safe=False)
    elif request.method == 'DELETE':
        booking = Booking.objects.get(id=pk)
        booking.delete()
        return JsonResponse({"message": "Booking deleted."})


def api_finish_booking(request, pk):
    booking = Booking.objects.get(id=pk)
    booking.status = 'finished'
    booking.save()
    return JsonResponse(booking, encoder=BookingEncoder, safe=False)


def api_book_booking(request, pk):
    booking = Booking.objects.get(id=pk)
    booking.status = 'booked'
    booking.save()
    return JsonResponse(booking, encoder=BookingEncoder, safe=False)


def api_cancel_booking(request, pk):
    booking = Booking.objects.get(id=pk)
    booking.status = 'cancelled'
    booking.save()
    return JsonResponse(booking, encoder=BookingEncoder, safe=False)
