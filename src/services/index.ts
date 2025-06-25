// Auth
import { loginUser, registerUser } from "./authServices";

// Teacher
import {
  getAllTeachers,
  deleteTeacher,
  createTeacher,
  getTeacher,
} from "./teacherServices";

// Student
import { getAllStudents } from "./studentServices";

// Export
export {
  getAllStudents,
  getTeacher,
  loginUser,
  registerUser,
  getAllTeachers,
  deleteTeacher,
  createTeacher,
};
