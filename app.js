const express = require('express'); // Import express
const { MongoClient } = require('mongodb'); // Import MongoClient
const app = express(); // Create an instance of express
app.use(express.json()); // Use express.json() middleware
const uri = "mongodb+srv://librarydb.shga9p9.mongodb.net/";// Correctly instantiate MongoClient

client.connect().then(() => {
  const db = client.db('Students');
  const collection = db.collection('student_records');

  // Endpoint to retrieve all active students
  app.get('/students/active', async (req, res) => {
    const students = await collection.find({ status: "active" }).toArray();
    res.json(students);
  });

  // Endpoint to add a new student
  app.post('/students', async (req, res) => {
    const newStudent = req.body;
    await collection.insertOne(newStudent);
    res.status(201).send('Student added');
  });

  // Endpoint to update student status
  app.put('/students/:id/status', async (req, res) => {
    const studentId = req.params.id;
    const newStatus = req.body.status;
    await collection.updateOne({ student_id: studentId }, { $set: { status: newStatus } });
    res.send('Student status updated');
  });

  // Endpoint to delete a student
  app.delete('/students/:id', async (req, res) => {
    const studentId = req.params.id;
    await collection.deleteOne({ student_id: studentId });
    res.send('Student deleted');
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch(console.error);
