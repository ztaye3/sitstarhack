from djoser.serializers import UserCreateSerializer
from rest_framework.serializers import ModelSerializer
from .models import Bike, TrainCapacity


# About serializer
class TrainCapacitySerializer(ModelSerializer):
    class Meta:
        model = TrainCapacity
        fields = '__all__'


# Bike serializer
class BikeSerializer(ModelSerializer):
    class Meta:
        model = Bike
        fields = '__all__'
