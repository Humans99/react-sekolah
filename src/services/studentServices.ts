import api from "@/api/axios";

export const getAllStudents = async (url: string = "/students") => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.log("Error fetching students data: ", error);
    throw error;
  }
};

export const createStudent = async (data: any) => {
  try {
    const response = await api.post("/students/student-register", data);
    return response.data;
  } catch (error) {
    console.log("Error create students: ", error);
    throw error;
  }
};

export const deleteStudent = async (nis: string) => {
  try {
    const response = await api.delete(`/students/nis/${nis}`);
    return response.data;
  } catch (error) {
    console.log("Error to delete student data: ", error);
    throw error;
  }
};
