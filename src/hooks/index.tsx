import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
  const { data } = useQuery({
    queryKey: ["newTodos"],
    queryFn: async () => {
      const response = await fetch("/api/todos?status=NOTES");
      const result = await response.json();

      return result;
    },
  });

  return data;
};
