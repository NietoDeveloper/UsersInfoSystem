const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true, useUnifiedTopology: true });

const studentSchema = new mongoose.Schema({
  registrationNumber: String,
  name: String,
  branch: String,
  year: Number,
  totalMarks: Number,
});

const Student = mongoose.model('Student', studentSchema);

app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
