from common.json import ModelEncoder
from .models import User, Amenity, Rental, Bed, Bedroom, Review
from common.json import ModelEncoder
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.fields import DateField
from datetime import date
import json


class CustomJSONEncoder_User(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, date):
            return obj.strftime('%Y-%m-%d')
        if isinstance(obj, User):
            return {
                'id': obj.id,
                'photo': obj.photo,
                'email': obj.email,
                'host_status': obj.host_status,
                'username': obj.username,
                'first_name': obj.first_name,
                'last_name': obj.last_name,
                'birthday': obj.birthday,
                'password': obj.password,
                'is_superhost': obj.is_superhost
            }
        return super().default(obj)


class UserEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, User):
            return {
                'id': obj.id,
                'username': obj.username,
                'first_name': obj.first_name,
                'last_name': obj.last_name,
                'email': obj.email,
                'birthday': obj.birthday,
                'photo': obj.photo,
                'host_status': obj.host_status,
                'is_superhost': obj.is_superhost
            }
        return super().default(obj)


class AmenityEncoder(ModelEncoder):
    model = Amenity
    properties = [
        "toilet_paper",
        "soap",
        "towels",
        "bedding",
        "cleaning_supplies",
        "pool",
        "wifi",
        "kitchen",
        "parking",
        "jacuzzi",
        "washer_dryer",
        "ac_heat",
        "self_check_in",
        "dedicated_workspace",
        "pets_allowed",
        "carbon_monoxide_detector",
        "smoke_detector",
        "first_aid_kit",
        "fire_extinguisher",
        "step_free_access",
        "wide_entryway",
        "wide_hallway_clearance",
        "accessible_bathroom",
        "id",
        "courtyard_view",
        "bathtub",
        "great_location",
    ]


class BedEncoder(ModelEncoder):
    model = Bed
    properties = [
        "bed_type",
        "bed_count"
    ]


class ReviewEncoder(ModelEncoder):
    model = Review
    properties = [
        "id",
        "user",
        "rating",
        "comment",
        "date"
    ]
    encoders = {
        "user": CustomJSONEncoder_User(),
    }


class RentalEncoder(ModelEncoder):
    model = Rental
    properties = [
        "host",
        "address",
        "city",
        "state",
        "zip_code",
        "country",
        "id",
        "amenity",
        "max_guests",
        "rental_type",
        "description",
        "price_per_night",
        "price_before_discount",
        "images",
    ]
    encoders = {
        "amenity": AmenityEncoder(),
        "host": CustomJSONEncoder_User(),
    }

    def get_extra_data(self, o):
        if isinstance(o, Rental):
            bedrooms = Bedroom.objects.filter(rental=o)
            reviews = Review.objects.filter(rental=o)
            res = []
            for bedroom in bedrooms:
                beds = Bed.objects.filter(bedroom=bedroom)
                beds = [BedEncoder().encode(bed) for bed in beds]
                reviews = Review.objects.filter(rental=o)

                res.append(
                    {
                        "id": bedroom.id,
                        "beds": beds,
                    }
                )
            return {
                "bedrooms": res,
                "reviews": [ReviewEncoder().encode(review) for review in reviews]
            }

        return super().get_extra_data(o)
