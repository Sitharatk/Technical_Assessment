# Student Management System

A web application for managing student records using React and Redux.

## Features
- Display student details in a responsive table.
- Add new students with a modal form.
- Visualize student statuses.

## Components
### `Card`
- Displays a list of students.
- Allows filtering by academic year and cohort.
- Includes a button to open the "Add New Student" modal.

### `Addstudent`
- Modal form for adding a new student.
- Captures details like name, cohort, courses, and status.
- Dispatches the `createItem` action to add the student to the store.
