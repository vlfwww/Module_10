import axios from "axios";

export const graphqlRequest = async <T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> => {
  const token = localStorage.getItem("access_token");

  const response = await axios.post(
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
