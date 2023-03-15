from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


class User(AbstractUser):
  birthday = models.CharField(null=True, blank=True, max_length=10)
  photo = models.URLField()
  email = models.EmailField(max_length=254, null=True)
  host_status = models.BooleanField(default=False, null=True)
  is_superhost = models.BooleanField(default=False, null=True)
  password = models.CharField(max_length=128, default=make_password(None))

  # def __str__(self):
  #   return f"{self.name}"

#Ubiquitous Language:

# login form
# sign up form
# Rental creation form: will also contain amenity checklist form
# Booking
# Host
# Guest
# Reviews

#   FrontEnd:
# - BookingCreateForm.js (Guest)
# - RentalCreateForm.js (Host)
# - LoginInForm.js
# - SignUpForm.js

# - RentalList.js
# - RentalDetail.js


class Amenity(models.Model):
    toilet_paper = models.BooleanField(default=False)
    soap = models.BooleanField(default=False)
    towels = models.BooleanField(default=False)
    bedding = models.BooleanField(default=False)
    cleaning_supplies = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    wifi = models.BooleanField(default=False)
    kitchen = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    jacuzzi = models.BooleanField(default=False)
    washer_dryer = models.BooleanField(default=False)
    ac_heat = models.BooleanField(default=False)
    self_check_in = models.BooleanField(default=False)
    workspace = models.BooleanField(default=False)
    pets_allowed = models.BooleanField(default=False)
    carbon_monoxide_detector = models.BooleanField(default=False)
    smoke_detector = models.BooleanField(default=False)
    first_aid_kit = models.BooleanField(default=False)
    fire_extinguisher = models.BooleanField(default=False)
    step_free_access = models.BooleanField(default=False)
    wide_entryway = models.BooleanField(default=False)
    wide_hallway_clearance = models.BooleanField(default=False)
    accessible_bathroom = models.BooleanField(default=False)
    rental = models.ForeignKey(
        "Rental",
        related_name="amenities",
        on_delete=models.PROTECT
    )

    def __str__(self):
        return self.rental


class Rental(models.Model):
    host = models.ForeignKey(
        User,
        related_name="rentals",
        on_delete=models.PROTECT,
        null=True
    )
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.address}, {self.city}, {self.state} {self.zip_code}, {self.country}"
