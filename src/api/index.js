import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v2",
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

export const fetchCountryByCode = async (countryCode) => {
  try {
    const response = await instance.get(`/alpha/${countryCode}`);
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    if (error?.response) {
      const errorMessage = error.response.data.error.message;
      throw new Error(errorMessage);
    } else {
      throw new Error("Failed to fetch country data");
    }
  }
};
