const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  name: String,
  attendance: Number, // Percentage 0-100
  gpa: Number,        // 0.0 - 4.0
  missedAssignments: Number,
  // Fields for the SRS "Predictive Success Model"
  riskScore: { type: Number, default: 0 }, 
  atRisk: { type: Boolean, default: false }
});

module.exports = mongoose.model('Student', StudentSchema);