from common.json import ModelEncoder

from .models import Booking, UserVO, RentalVO


class UserVOEncoder(ModelEncoder):
    model = UserVO
    properties = [
        'name',
        'email',
        'host_status',
        'photo'
    ]


class RentalVOEncoder(ModelEncoder):
    model = RentalVO
    properties = [
        'id',
        'address',
        'city',
        'state',
        'zip_code',
        'country',
        'host',
    ]
    encoders = {"host": UserVOEncoder()}


class BookingEncoder(ModelEncoder):
    model = Booking
    properties = [
        "id",
        "start_date",
        'end_date',
        'num_guests',
        'has_pets',
        'status',
        "guest",
        "rental"
    ]
    encoders = {
        "guest": UserVOEncoder(),
        "rental": RentalVOEncoder(),
    }
