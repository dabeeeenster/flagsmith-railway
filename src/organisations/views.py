# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from projects.serializers import ProjectSerializer
from organisations.serializers import OrganisationSerializer
from users.models import Invite
from users.serializers import InviteSerializer, UserListSerializer, \
    InviteListSerializer


class OrganisationViewSet(viewsets.ModelViewSet):
    serializer_class = OrganisationSerializer

    def get_queryset(self):
        return self.request.user.organisations.all()

    def create(self, request):
        """
        Override create method to add new organisation to authenticated user
        """
        user = request.user
        serializer = OrganisationSerializer(data=request.data)
        if serializer.is_valid():
            org = serializer.save()
            user.organisations.add(org)

            return Response(serializer.data, status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True)
    def projects(self, request, pk):
        organisation = self.get_object()
        projects = organisation.projects.all()
        return Response(ProjectSerializer(projects, many=True).data)

    @action(detail=True)
    def users(self, request, pk):
        organisation = self.get_object()
        users = organisation.users.all()
        return Response(UserListSerializer(users, many=True).data)

    @action(detail=True, methods=["POST"])
    def invite(self, request, pk):
        organisation = self.get_object()

        if "emails" not in request.data:
            raise ValidationError({"detail": "List of emails must be provided"})

        if "frontend_base_url" not in request.data:
            raise ValidationError({"detail": "Must provide base url"})

        invites = []

        for email in request.data["emails"]:
            invite = Invite.objects.filter(email=email, organisation=organisation)
            if invite.exists():
                data = {"error": "Invite already exists for this email address."}
                return Response(data, status=status.HTTP_400_BAD_REQUEST)

            invites.append({"email": email, "frontend_base_url": request.data["frontend_base_url"],
                            "organisation": organisation.id, "invited_by": self.request.user.id})

        invites_serializer = InviteSerializer(data=invites, many=True)

        if invites_serializer.is_valid():
            invite = invites_serializer.save()
            return Response(InviteListSerializer(instance=invite, many=True).data, status=status.HTTP_201_CREATED)
        else:
            raise ValidationError(invites_serializer.errors)


class InviteViewSet(viewsets.ModelViewSet):
    serializer_class = InviteListSerializer

    def get_queryset(self):
        organisation_pk = self.kwargs.get('organisation_pk')
        return Invite.objects.filter(organisation=organisation_pk)

    @action(detail=True, methods=["POST"])
    def resend(self, request, organisation_pk, pk):
        invite = self.get_object()
        invite.send_invite_mail()
        return Response(status=status.HTTP_200_OK)
