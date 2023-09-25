import express from 'express';
import VirtualClassroomManager from './VirtualClassroomManager.js';

const app = express();
app.use(express.json());

const manager = new VirtualClassroomManager();

// API endpoint to add a classroom
app.post('/add_classroom', (req, res) => {
  const { className } = req.body;
  const response = manager.addClassroom(className);
  res.send(response);
});

// API endpoint to add a student to a classroom
app.post('/add_student', (req, res) => {
  const { studentId, className } = req.body;
  const response = manager.addStudent(studentId, className);
  res.send(response);
});

// API endpoint to schedule an assignment for a classroom
app.post('/schedule_assignment', (req, res) => {
  const { className, assignmentDetails } = req.body;
  const response = manager.scheduleAssignment(className, assignmentDetails);
  res.send(response);
});

// API endpoint to submit an assignment by a student
app.post('/submit_assignment', (req, res) => {
  const { studentId, className, assignmentDetails } = req.body;
  const response = manager.submitAssignment(studentId, className, assignmentDetails);
  res.send(response);
});

// API endpoint to list all classrooms
app.get('/list_classrooms', (req, res) => {
  const classrooms = manager.listClassrooms();
  res.send(classrooms);
});

// API endpoint to list students in a classroom
app.get('/list_students_in_class', (req, res) => {
  const { className } = req.query;
  const students = manager.listStudentsInClass(className);
  res.send(students);
});

// API endpoint to list assignments in a classroom
app.get('/list_assignments_in_class', (req, res) => {
  const { className } = req.query;
  const assignments = manager.listAssignmentsInClass(className);
  res.send(assignments);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
