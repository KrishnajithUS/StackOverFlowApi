from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import GetApiData

# Create your views here.


class DisplayAllQuestions(APIView):

    def get(self, request, *args, **kwargs):
        page = request.query_params.get("page")
        obj = GetApiData()
        questions = obj.get_all_questions(page)
        return Response(questions, status=status.HTTP_200_OK)


class SearchQuestions(APIView):

    def get(self, request, *args, **kwargs):
        page = request.query_params.get("page")
        query = request.query_params.get("query")
        obj = GetApiData()
        search_questions = obj.search(query, page)
        type(search_questions)
        return Response(search_questions, status=status.HTTP_200_OK)
