from django.urls import path, include
from . import views
from django.conf import settings
from django.core.cache.backends.base import DEFAULT_TIMEOUT
from django.views.decorators.cache import cache_page
CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)


urlpatterns = [
    path("all_questions/", (cache_page(CACHE_TTL))(views.DisplayAllQuestions.as_view()), name="allquestions"),
    path("search_questions/",(cache_page(CACHE_TTL))(views.SearchQuestions.as_view()), name="allquestions"),

]
