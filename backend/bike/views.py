from django.shortcuts import render
from .serializers import BikeSerializer
from .models import TrainCapacity, Bike
from rest_framework import status, viewsets
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings


# Create your views here.
# Bike  view
class BikeView(viewsets.ViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer(many=True)

    # Create cv API : api/personal/v1/cv/addCv/, Method:POST
    def create(self, request):

        # filter data
        data = request.data

        # serializer = BikeSerializer(data=data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        return Response(data, status=status.HTTP_201_CREATED)

    # Get all cv API : api/personal/v1/cv, Method:GET
    def list(self, request, page=None, offset=None):

        # Check if any cv exist
        try:
            queryset = Bike.objects.filter()
        except Bike.DoesNotExist:
            return Response(data={'message': 'No cv registered'}, status=status.HTTP_204_NO_CONTENT)
        else:

            serializer = BikeSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    # Get CV API : api/personal/v1/cv/'pk', Method:GET
    def retrieve(self, request, pk=None):
        # Check if the cv is exist
        try:

            queryset = Bike.objects.filter(id=pk)

        except Bike.DoesNotExist:
            return Response(data={'message': 'Bike does not exits'}, status=status.HTTP_204_NO_CONTENT)

        else:
            serializer = BikeSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    # Update cv API : api/personal/v1/cv/'pk'/, Method:PUT
    def update(self, request, pk=None):

        # Check if the cv exists
        try:
            queryset = Bike.objects.get(id=pk)
        except Bike.DoesNotExist:
            return Response(data={'message': 'Bike does not exits'}, status=status.HTTP_204_NO_CONTENT)
        else:
            serializer = BikeSerializer(instance=queryset, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    # Delete Bike API : api/personal/v1/cv/'pk', Method:DELETE
    def destroy(self, request, pk=None):
        # Check if the category exists
        try:
            queryset = Bike.objects.get(id=pk)
        except Bike.DoesNotExist:
            return Response(data={'message': 'Bike does not exits'}, status=status.HTTP_204_NO_CONTENT)
        else:
            queryset.delete()
