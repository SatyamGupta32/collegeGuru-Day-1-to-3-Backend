# College Management System
This project is a simple College Management System with a React frontend and a backend built using Express and MongoDB. The application allows users to search, filter, and view detailed college listings.

Technologies Used:
- Frontend: React + Vite
- Backend: Express.js + MongoDB
- Database: MongoDB (for storing college data)


## Prerequisites:
- Node.js (v16 or higher)
- MongoDB (either local or a cloud instance like MongoDB Atlas)

## Installation:

### Clone the repository:

```
git clone https://github.com/SatyamGupta32/collegeGuru-Day-1-and-2-Backend.git
```
``` 
cd  collegeGuru-Day-1-and-2-Backend
```
### Install dependencies:
```
npm install
```
### Start the backend server:
```
npm run dev
```
## Usage
- Once the backend server is running (usually on port 3000 by default), access the frontend application in your browser at http://localhost:3000.

### Day 1: Setting Up the Backend

#### Task 1: MongoDB Collection Setup
1. Create a MongoDB database to store college data.
2. Define a colleges collection with the following fields:

- name (string): College name
- city (string): College city
- state (string): College state
- courses (array of strings): List of offered courses
- established (number): Year of establishment
- rating (number): Average rating (optional)
- reviews (array of objects): Collection of user reviews (optional)
- Each review object can contain fields like user, rating, and review

#### Task 2: API Endpoints
The following API endpoints were implemented on Day 1:

- GET /colleges: Fetches all colleges from the database.
- POST /colleges: Creates a new college in the database, taking college data as JSON in the request body.

### Day 2: Implementing Search and Filter Options

#### Task 1: Search and Filter Endpoint
-GET /colleges?name=...&city=...&state=...&minRating=...&maxRating=...:
  - Fetches colleges based on search and filter criteria provided in query parameters.
  - Parameters:
      - name (optional): Filter by college name (partial match).
      - city (optional): Filter by city.
      - state (optional): Filter by state.
      - minRating (optional): Minimum rating threshold (number).
      - maxRating (optional): Maximum rating threshold (number).
      - Returns a list of matching colleges.
      - GET /colleges/:id: Fetches a college by its ID

#### Task 2: Detailed College Data Endpoint
- GET /colleges/:id: Fetches a specific college by its ID from the database.

## License
This project is licensed under the MIT License. See the LICENSE file for details.