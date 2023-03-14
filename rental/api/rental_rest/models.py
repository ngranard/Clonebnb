from django.db import models


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
        # User,
        related_name="rental",
        on_delete=models.PROTECT
    )
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.address}, {self.city}, {self.state} {self.zip_code}, {self.country}"
