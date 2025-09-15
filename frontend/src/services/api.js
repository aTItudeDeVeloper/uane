import axios from "axios";

const API_URL = "http://192.168.100.20:8000/api";

export async function fetchCourses() {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar cursos");
  }
}
