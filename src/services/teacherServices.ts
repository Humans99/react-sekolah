import api from "../api/axios";

export const getAllTeachers = async () => {
  try {
    const response = await api.get("/teachers");
    return response.data.data;
  } catch (error) {
    console.log("Error fetching teachers data: ", error);
    throw error;
  }
};
