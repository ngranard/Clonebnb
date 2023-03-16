from django.contrib import admin
from user_rest.models import User, Rental, Amenity, Bed, Bedroom, Review
# Register your models here.


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(Rental)
class RentalAdmin(admin.ModelAdmin):
    pass


@admin.register(Amenity)
class AmenityAdmin(admin.ModelAdmin):
    pass


@admin.register(Bed)
class BedAdmin(admin.ModelAdmin):
    pass


@admin.register(Bedroom)
class BedroomAdmin(admin.ModelAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
