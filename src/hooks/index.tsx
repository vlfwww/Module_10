import { useQuery } from "@tanstack/react-query";

export const useExtraTodos = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    throw new Error("no token provided");
  }
  const { data, isLoading } = useQuery({
    queryKey: ["newTodos"],
    queryFn: async () => {
      const response = await fetch("/api/todos?status=NOTES", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("error catched while fetching");
      }
      const result = await response.json();

      return result;
    },
  });

  console.log(data);
  console.log(isLoading);
  return { data, isLoading };
};
