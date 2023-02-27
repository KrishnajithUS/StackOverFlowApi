from rest_framework import throttling


class BurstRateThrottle(throttling.AnonRateThrottle):
    scope = 'burst'

    def allow_request(self, request, view):
        return super().allow_request(request, view)

class SustainedRateThrottle(throttling.AnonRateThrottle):
    scope = 'sustained'

    def allow_request(self, request, view):
        return super().allow_request(request, view)