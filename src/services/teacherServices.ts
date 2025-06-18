import api from "../api/axios";

export const getAllTeachers = async (url: string = "/teachers") => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.log("Error fetching teachers data: ", error);
    throw error;
  }
};

export const deleteTeacher = async (code: string) => {
  try {
    const response = await api.delete(`/teachers/code/${code}`);
    return response.data;
  } catch (error) {
    console.log("Error delete teachers data", error);
    throw error;
  }
};
