from django.db import models


class UserVO(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    photo = models.URLField()
    host_status = models.BooleanField(default=False)
    join_date = models.DateField(null=True, blank=True, auto_now=True)

    def __str__(self):
        return self.name


class RentalVO(models.Model):
    host = models.ForeignKey(UserVO, on_delete=models.PROTECT)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.address}, {self.city}, {self.state} {self.zip_code}, {self.country}"


# Create your models here.
class Booking(models.Model):
    rental = models.ForeignKey(RentalVO, on_delete=models.CASCADE)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    guest = models.ForeignKey(UserVO, on_delete=models.CASCADE)
    num_guests = models.IntegerField(null=True, default=1)
    has_pets = models.BooleanField(default=False)
    status = models.CharField(max_length=255, default="pending")

    def __str__(self):
        return str(self.id) + " " + self.rental.host.name


# class Status(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField(null=True, blank=True)

#     def __str__(self):
#         return self.name
