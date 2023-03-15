from django.contrib import admin
from .models import Booking, RentalVO, UserVO

# Register your models here.


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ["guest", "rental", "start_date", "end_date", "status"]


@admin.register(RentalVO)
class RentalVOAdmin(admin.ModelAdmin):
    list_display = ['host', 'address', 'city', 'state', 'zip_code', 'country']


@admin.register(UserVO)
class UserVOAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'photo', 'host_status', 'join_date']
