from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from common.json import ModelEncoder
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.fields import DateField
from django.views.decorators.http import require_http_methods
from .models import User, Rental, Amenity
from .encoders import CustomJSONEncoder_User, UserEncoder, RentalEncoder, AmenityEncoder


def user_to_json(user):
    return json.dumps(user, cls=UserEncoder)


def user_to_json(user):
    return json.dumps(user, cls=UserEncoder)


@require_http_methods(["GET", "POST"])
def api_user_list(request):
    if request.method == "GET":
        users = User.objects.all()
        return JsonResponse(
            {"users": list(users)}, encoder=CustomJSONEncoder_User, safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            user = User.objects.create(**content)
            return JsonResponse(
                {"users": user}, encoder=CustomJSONEncoder_User, safe=False
            )
        except:
            response = JsonResponse({"message": "Invalid User Info"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def rental_list(request):
    if request.method == "GET":
        rentals = Rental.objects.all()
        return JsonResponse(
            {"rentals": rentals},
            encoder=RentalEncoder,
            safe=False
        )

    elif request.method == "POST":
        data = json.loads(request.body)
        host_id = data["host_id"]
        host = User.objects.get(id=host_id) if host_id else None
        print(host)
        rental = Rental.objects.create(host=host, **data)
        print(rental)

        amenity_data = data.get("amenity", None)
        if amenity_data:
            amenity = Amenity.objects.create(rental=rental, **amenity_data)
            rental.amenity.set(amenity)

        return JsonResponse(
            rental,
            encoder=RentalEncoder,
            safe=False
        )

    else:
        return JsonResponse(
            {"error": "Invalid request method"},
            status=405
        )


@require_http_methods(["GET"])
def rental_detail(request, id):
    try:
        rental = Rental.objects.get(id=id)
        return JsonResponse(
            rental,
            encoder=RentalEncoder,
            safe=False
        )
    except Rental.DoesNotExist:
        response = JsonResponse({"message": "Rental not found"})
        response.status_code = 404
        return response

    # elif request.method == "PUT":
    #     data = json.loads(request.body)
    #     amenity_data = data.append("amenity", None)
    #     Rental.objects.filter(id=id).update(**data)

    #     if amenity_data:
    #         Amenity.objects.filter(rental=rental).update(**amenity_data)

    #     rental.refresh_from_db()

    #     return JsonResponse(
    #         rental,
    #         encoder=RentalEncoder,
    #         safe=False
    #     )

    # elif request.method == "DELETE":
    #     rental.delete()
    #     return JsonResponse(
    #         {"message": "Rental deleted"},
    #         status=204
    #     )

    # else:
    #     return JsonResponse(
    #         {"error": "Invalid request method"},
    #         status=405
    #     )
