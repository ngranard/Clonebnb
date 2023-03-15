from django.apps import AppConfig


class UserRestConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'user_rest'

class RentalRestConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'rental_rest'
