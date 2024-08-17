# Final Assignment Report## Overview

I used Node.js, Express, and MongoDB to create a RESTful API for managing student records for this assignment. The API has components for indexing, validation, and data visualization and allows for a variety of operations on student data.

## Important Discoveries###1. Indexing and Search Efficiency

I made indexes on the `student_records` collection for fields like `student_id}, `email`, and `enrollment_date} in order to enhance query performance. 
- **Prior to indexing:** As the dataset expanded, query performance for searching by these fields became increasingly sluggish.
**Following Indexing:** There were noticeable gains in performance, including quicker query response times. For example, using the {student_id} search parameter now yields results nearly instantaneously, showcasing the efficiency of indexing in streamlining search processes.

### 2. Schema Validation

In order to ensure data integrity in the `student_records` collection, I put schema validation rules into place:
-**Email Format:** Verified that the email format entered in the `email} field is valid.
The `age} field was restricted to a realistic range of 18-30 years.
-**Status:** Limiting the values of the `status} field to predetermined options ("active", "graduated", "dropped").
  
The successful prevention of incorrect data entry into the database by the schema was verified through an effort to insert inaccurate documents during the validation test.

### 3. API Development

The following endpoints were used in the development of the RESTful API:
**Get Active Students:** Provides a list of students who are in the "active" status.
- **Add New Student:** This option enables the entry of a fresh student record.
- **Update Student Status:** Modifies a student's status.
- **Delete Student**: This command removes a student's entry from the database.

Postman was used to test these endpoints, and everything worked as it should have. An effective interface for managing student data and interfacing with other apps is offered via the API.

### 4. Data Visualization

I made the following visualizations using MongoDB Charts to learn more about the student data:
- **Pie Chart:** Shows how students are distributed according to their status ("active," "graduated," "dropped").
- **Bar Chart:** Displays the annual enrollment figures for students.
- **Line Chart:** Displays the average grade over time for each course.

The dashboard these graphics were integrated into made it simple to see and analyze trends in student data.

## Lessons Learned-**Indexing:** Highlighted the significance of indexing in database management by demonstrating how it greatly enhances query performance.
- **Schema Validation:** emphasized the significance of data integrity and the ways in which validation rules can compel accurate and consistent data.
- **API Development:** Acquired practical expertise in creating and recording RESTful APIs.
**Visualization of Data:** learned how to describe and analyze data effectively with MongoDB charts.

## Conclusion

This project gave me invaluable experience in creating a RESTful API, validating data, optimizing MongoDB searches, and visualizing data. These abilities are essential for developing dependable, data-driven, and effective apps.




