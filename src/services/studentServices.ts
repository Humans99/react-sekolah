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
