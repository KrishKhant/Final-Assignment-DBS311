# Final-Assignment-DBS311
# Student Records API## Overview

This project provides a RESTful API for managing student records in a MongoDB database. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on student data. The server is built using Node.js, Express, and MongoDB.

## Getting Started### Prerequisites- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) server or a MongoDB Atlas cluster.
-`express` and `mongodb` packages installed. You can install them using npm.


API Endpoints
1. Retrieve All Active Students
URL:/students/active

Method:GET

Description: Retrieves a list of all students with the status "active".

Response:

json
Copy code
[{"student_id":"S12345","name":"John Doe","email":"john.doe@example.com","age":21,"courses":[{"course_name":"Database Systems","grade":"A"},{"course_name":"Web Development","grade":"B+"}],"enrollment_date":"2023-09-01T00:00:00Z","status":"active"}]
2. Add a New Student
URL:/students

Method:POST

Description: Adds a new student record to the database.

Request Body:

json
Copy code
{"student_id":"S67890","name":"Jane Smith","email":"jane.smith@example.com","age":22,"courses":[{"course_name":"Algorithms","grade":"A-"},{"course_name":"Data Structures","grade":"B"}],"enrollment_date":"2024-01-15T00:00:00Z","status":"active"}
Response:

text
Copy code
Student added
3. Update Student Status
URL:/students/:id/status

Method:PUT

Description: Updates the status of a student.

Request Parameters:

id: The ID of the student to update.
Request Body:

json
Copy code
{"status":"graduated"}
Response:

text
Copy code
Student status updated
4. Delete a Student
URL:/students/:id

Method:DELETE

Description: Deletes a student record from the database.

Request Parameters:

id: The ID of the student to delete.
Response:

text
Copy code
Student deleted
Schema Validation
Schema validation rules are enforced to maintain data integrity:

Email Format: Validates that the email field contains a proper email format.
Age Range: Restricts the age field to values between 18 and 30.
Status Values: Ensures the status field contains one of the predefined values ("active", "graduated", "dropped").
Data Visualization
MongoDB Charts have been used to create visual representations of the data:

Pie Chart: Distribution of students by status ("active", "graduated", "dropped").
Bar Chart: Number of students enrolled each year.
Line Chart: Average grade for each course over time.
These charts are embedded into a dashboard for easy access and analysis.

Contributing
If you have suggestions for improvements or would like to contribute to the project, please submit a pull request or open an issue in the GitHub repository.
