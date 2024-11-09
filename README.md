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
cd  collegeGuru-Day-1-and-4-Backend
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

### Day 3: Request Validation and User Roles
#### Task 1: Request Validation and Error Handling
- Added middleware for request validation to ensure that incoming data is properly formatted and required fields are present.
- Implemented centralized error handling middleware to catch and handle errors gracefully, providing clear error responses to the client.

#### Task 2: User Role Management
- Developed middleware for role-based access control.
    - Created a roleCheck middleware to differentiate between admin and user roles.
    - Restricted access to certain endpoints based on user roles, allowing only admins to perform certain actions (like creating or updating college data).

### Day 4: User-Generated Content (Reviews and Ratings)
#### Task 1: Review and Rating APIs
- Created APIs to enable users to add reviews and ratings for colleges.
    - POST /:collegeId/:userId/review: Allows users to submit a review for a college. Only authenticated users can add reviews.
    - GET /:collegeId/reviews: Fetches all reviews for a specific college.

#### Task 2: Testing and Final Adjustments
- Tested all college-related API functionalities, including the new review and rating endpoints.
- Refined validation and error handling for the review APIs to ensure data integrity and clear error messages for users.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
