import axios from "axios";

export const apiUrl = "https://restcountries.com/v2";

const instance = axios.create({
  baseURL: apiUrl,
});

export const fetchAllCountries = async () => {
  try {
    const response = await instance.get(`/all`);
    if (response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    if (error?.response) {
      const errorMessage = error.response.data.error.message;
      throw new Error(errorMessage);
    } else {
      throw new Error("Failed to fetch all countries");
    }
  }
};
