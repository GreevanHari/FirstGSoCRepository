const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Student = require('./models/Student');

const app = express();
app.use(express.json());
app.use(cors());

// --- 1. Database Connection ---
// Define the connection string directly as a fallback
const db = process.env.MONGO_URI || "mongodb://localhost:27017/iap_db";

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    console.log('------------------------------------------------');
    console.log('If you see "ECONNREFUSED", your MongoDB is not running.');
    console.log('Please start MongoDB Compass or the MongoDB Service.');
    console.log('------------------------------------------------');
  });
// --- 2. Predictive Logic (SRS Feature 3) ---
// This calculates if a student is "At Risk" based on SRS requirements
const calculateRisk = (student) => {
  let risk = 0;
  // If attendance is below 75%, add 40 risk points
  if (student.attendance < 75) risk += 40;
  // If GPA is below 2.5, add 30 risk points
  if (student.gpa < 2.5) risk += 30;
  // If missed assignments > 2, add 30 risk points
  if (student.missedAssignments > 2) risk += 30;
  return risk;
};

// --- 3. Seed Data Route (Run this once to populate DB) ---
app.get('/api/seed', async (req, res) => {
  try {
    // Create Admin User
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('password123', salt);
    
    await User.deleteMany({});
    await Student.deleteMany({});

    await User.create({ 
      name: 'Greevan Hari', 
      email: 'admin@iap.edu', 
      password: hash, 
      role: 'admin' 
    });

    // Create Mock Students
    const students = [
      { studentId: 'S001', name: 'Alice Smith', attendance: 92, gpa: 3.8, missedAssignments: 0 },
      { studentId: 'S002', name: 'Bob Jones', attendance: 65, gpa: 2.1, missedAssignments: 4 }, // High Risk
      { studentId: 'S003', name: 'Charlie Day', attendance: 78, gpa: 2.9, missedAssignments: 1 },
      { studentId: 'S004', name: 'Dana Lee', attendance: 50, gpa: 1.8, missedAssignments: 6 }, // High Risk
    ];

    // Apply Predictive Model
    const processedStudents = students.map(s => {
      const score = calculateRisk(s);
      return { ...s, riskScore: score, atRisk: score > 50 };
    });

    await Student.insertMany(processedStudents);
    res.json({ msg: 'Database Seeded Successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 4. Login Route (SRS Feature 1) ---
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  // Generate Token
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { name: user.name, role: user.role } });
});

// --- Middleware for Protected Routes ---
const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

// --- 5. Dashboard Analytics Route (SRS Feature 2) ---
app.get('/api/analytics/dashboard', authMiddleware, async (req, res) => {
  try {
    const students = await Student.find();
    
    // Calculate KPIs
    const totalStudents = students.length;
    const atRiskCount = students.filter(s => s.atRisk).length;
    const totalAttendance = students.reduce((acc, curr) => acc + curr.attendance, 0);
    const avgAttendance = totalStudents > 0 ? (totalAttendance / totalStudents).toFixed(1) : 0;

    res.json({
      kpi: { totalStudents, atRiskCount, avgAttendance },
      students // Sending raw data so the frontend can draw charts
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));