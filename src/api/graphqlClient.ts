import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const graphqlRequest = async (query: string, variables?: Record<string, unknown>) => {
  const token = localStorage.getItem("access_token");

  const response = await api.post(
    "/api/graphql",
    { query, variables },
    {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    },
  );

  if (response.data.errors) {
    throw new Error(response.data.errors[0].message);
  }

  return response.data.data;
};
