from common.json import ModelEncoder
from .models import User, Amenity, Rental
from common.json import ModelEncoder
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.fields import DateField
from datetime import date

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
    ]
    encoders = {
        "amenity": AmenityEncoder(),
        "host": CustomJSONEncoder_User(),
    }
