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
import {
  getAllStudents,
  createStudent,
  deleteStudent,
} from "./studentServices";

// Export
export {
  deleteStudent,
  createStudent,
  getAllStudents,
  getTeacher,
  loginUser,
  registerUser,
  getAllTeachers,
  deleteTeacher,
  createTeacher,
};
