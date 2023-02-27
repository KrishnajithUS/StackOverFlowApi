import requests


class GetApiData:
    BASE_URL = 'https://api.stackexchange.com/2.3/search/{}'

    def get_all_questions(self, page=1, order='desc', sort='activity', site='stackoverflow'):
        print(page)
        param = {
            "page": page,
            "order": order,
            "sort": sort,
            "site": "stackoverflow",
            "pagesize": 5
        }
        try:
            response = requests.get(
                self.BASE_URL.format('advanced'), params=param)
            print(response.url)
            json_response = response.json()
            return json_response
        except Exception as err:
            print(f'Other error occurred:{err}')

    def search(self, query, page, order="desc", sort="activity", site="stackoverflow"):
        search_params = [
            {"title": query},
            {"body": query},
            {"q": query},
            {"user": query}
        ]
        for param in search_params:

            param.update({
                "page": page,
                "order": order,
                "sort": sort,
                "site": "stackoverflow",
                "pagesize": 5
            })
            response = requests.get(
                self.BASE_URL.format('advanced'), params=param)
            print(response.url)

            json_response = response.json()
            if json_response.get("items"):
                return json_response
        return {"items": []}

    def solution():
        pass
