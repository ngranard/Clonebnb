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
    dedicated_workspace = models.BooleanField(default=False)
    pets_allowed = models.BooleanField(default=False)
    carbon_monoxide_detector = models.BooleanField(default=False)
    smoke_detector = models.BooleanField(default=False)
    first_aid_kit = models.BooleanField(default=False)
    fire_extinguisher = models.BooleanField(default=False)
    step_free_access = models.BooleanField(default=False)
    wide_entryway = models.BooleanField(default=False)
    wide_hallway_clearance = models.BooleanField(default=False)
    accessible_bathroom = models.BooleanField(default=False)
    courtyard_view = models.BooleanField(default=False)
    bathtub = models.BooleanField(default=False)
    great_location = models.BooleanField(default=False)


class Rental(models.Model):
    images = models.TextField(
        null=True, blank=True, default='["https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/2b38eb6e-0b90-4c5f-aa30-0636b0610b51.jpeg?im_w=720"]')
    host = models.ForeignKey(
        User,
        related_name="rental",
        on_delete=models.PROTECT,
        null=True
    )
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    country = models.CharField(max_length=255)
    max_guests = models.IntegerField(null=True, blank=True, default=1)
    rental_type = models.CharField(
        max_length=255, null=True, blank=True, default='Entire Place')
    bath_count = models.IntegerField(null=True, blank=True, default=1)
    description = models.TextField(null=True, blank=True, default='Large, modern home situated on a breathtaking property carved out of the hillside. Amazing views from all over the property, with expansive outdoor space that includes a hot tub and a pool.  Close to Oakhurst, Bass Lake, and Yosemite High speed Wi Fi Dedicated work space The space Almost new home, modern home on a large property. Secluded, yet close to town and Yosemite. Large house with high ceilings and great views from most rooms.')
    price_per_night = models.IntegerField(null=True, blank=True, default=169)
    price_before_discount = models.IntegerField(
        null=True, blank=True, default=221)
    amenity = models.ForeignKey(
        Amenity,
        related_name="amenity",
        on_delete=models.PROTECT,
        null=True,
    )

    def __str__(self):
        return f"{self.address}, {self.city}, {self.state} {self.zip_code}, {self.country}, {self.amenity}"


class Bedroom(models.Model):
    rental = models.ForeignKey(
        Rental, on_delete=models.CASCADE, related_name='bedrooms')


class Bed(models.Model):
    bedroom = models.ForeignKey(
        Bedroom, on_delete=models.CASCADE, related_name='beds')
    bed_type = models.CharField(max_length=255)
    bed_count = models.IntegerField(null=True, blank=True, default=1)


class Review(models.Model):
    user = models.ForeignKey(
        User,
        related_name="review",
        on_delete=models.CASCADE
    )
    rental = models.ForeignKey(
        Rental,
        related_name="review",
        on_delete=models.CASCADE
    )
    date = models.DateTimeField(auto_now_add=True)
    rating = models.FloatField(default=5.0, null=True, blank=True)
    comment = models.TextField(default='', null=True, blank=True)
