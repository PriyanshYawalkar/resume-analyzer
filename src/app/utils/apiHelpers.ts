import axios from "axios";

export const postFormData = async (url: string, data: FormData) => {
  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting form data:", error);
    throw error;
  }
};
