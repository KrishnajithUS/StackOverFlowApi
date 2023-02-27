# StackOverFlow Api(Using Django Rest Framework and React js)
A StackOverflowAPI-based application designed for searching questions on the Stack Overflow platform.
## Features
* Able to search all available fields/parameters
* Data is cached
* Added Throttling of (Search limit per min(5) and per day(100))
## Technologtes Used:
* Django rest Framework
* Redis(message broker)
* React
## Backend Setup
1. Clone the resporitory: `git clone https://github.com/KrishnajithUS/StackOverFlowApi.git`
2. Change current directory to `backend` folder:`cd backend`
3. Create a virutal environment and install all backend dependencies with pipenv: `pip install requirements.txt`.
4. Activate virtual environment :`source env/bin/activate`
5. Run `python manage.py makemigrations`.
## Frontend Setup
1. Navigate to the folder frontend:`cd frontend`
2. Install the all frontend dependencies using npm: `npm install`.
3.  Run the server: `npm start`.