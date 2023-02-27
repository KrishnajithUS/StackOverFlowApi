from rest_framework import throttling


class BurstRateThrottle(throttling.AnonRateThrottle):
    scope = 'burst'

    def allow_request(self, request, view):
        print("bruscalled")
        return super().allow_request(request, view)

class SustainedRateThrottle(throttling.AnonRateThrottle):
    scope = 'sustained'

    def allow_request(self, request, view):
        print("sasta called")
        return super().allow_request(request, view)