import axios from "axios";
const baseUrl = "https://jobs.github.com/positions";

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}.json`);
  return response.data;
};

export const getJob = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}.json`);
  return response.data;
};
