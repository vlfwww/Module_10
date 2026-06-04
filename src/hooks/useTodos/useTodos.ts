import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckListItem, GetTodoResponse } from "../../types/notes";
import {
  CHANGE_TODO_STATUS_MUTATION,
  DELETE_TODO_MUTATION,
  GET_TODO_QUERY,
  CREATE_TODO_MUTATION,
  UPDATE_TODO_MUTATION,
  TOGGLE_CHECKLIST_ITEM_MUTATION,
  UNCHECK_ALL_ITEMS_MUTATION,
  UPDATE_TODO_BACKGROUND_MUTATION,
} from "../../api/todoQueries";
import { graphqlRequest } from "../../api/graphqlClient";
import axios from "axios";

export const useTodos = (status?: "NOTES" | "ARCHIVED" | "TRASH") => {
  return useQuery({
    queryKey: ["todosList", status],

    queryFn: async () => {
      const data = await graphqlRequest(GET_TODO_QUERY, { status });
      return data as GetTodoResponse;
    },
  });
};

export const useDeleTodos = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return graphqlRequest(DELETE_TODO_MUTATION, { id });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todosList"] });
    },
  });
};

export const useChangeTodoStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newStatus }: { id: number; newStatus: "NOTES" | "ARCHIVED" | "TRASH" }) => {
      return graphqlRequest(CHANGE_TODO_STATUS_MUTATION, { id, newStatus });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todosList"],
      });
    },
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTodo: { title?: string; content?: string; items?: { text: string }[] }) => {
      return graphqlRequest(CREATE_TODO_MUTATION, { input: newTodo });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todosList"],
      });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      input,
    }: {
      id: number;
      input: {
        title?: string;
        content?: string;
        items?: CheckListItem[];
      };
    }) => {
      return graphqlRequest(UPDATE_TODO_MUTATION, { id, input });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todosList"],
      });
    },
  });
};

export const useToggleChecklistItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ todoId, itemId }: { todoId: number; itemId: number }) => {
      return graphqlRequest(TOGGLE_CHECKLIST_ITEM_MUTATION, { todoId, itemId });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todosList"],
      });
    },
  });
};

export const useUncheckAllItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return graphqlRequest(UNCHECK_ALL_ITEMS_MUTATION, { id });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todosList"],
      });
    },
  });
};

export const useDeleteAllTrash = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (trashNotes: { id: number }[]) => {
      if (!trashNotes || trashNotes.length === 0) return null;

      const mutationBody = trashNotes
        .map((note) => `delete_${note.id}: deleteTodo(id: ${note.id}) { id success }`)
        .join("\n");

      const DYNAMIC_DELETE_MUTATION = `
        mutation DeleteAllTrash {
          ${mutationBody}
        }`;
      return graphqlRequest(DYNAMIC_DELETE_MUTATION, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todosList"] });
    },
  });
};

export const useUnarchiveAll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (archivedNotes: { id: number }[]) => {
      if (!archivedNotes || archivedNotes.length === 0) return null;

      const mutationBody = archivedNotes
        .map(
          (note) =>
            `unarchive_${note.id}: changeTodoStatus(id: ${note.id}, newStatus: NOTES) { id }`,
        )
        .join("\n");

      const DYNAMIC_UNARCHIVE_MUTATION = `
        mutation UnarchiveAll {
          ${mutationBody}
        }
      `;

      return graphqlRequest(DYNAMIC_UNARCHIVE_MUTATION, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todosList"] });
    },
  });
};

export const useUpdateGlobalBackground = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (base64Image: string) => {
      const token = localStorage.getItem("access_token");
      const response = await axios.put(
        "/api/background",
        { backgroundImage: base64Image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todosList"] });
    },
  });
};

export const useUpdateTodoBackground = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, backgroundImage }: { id: number; backgroundImage: string }) => {
      return graphqlRequest(UPDATE_TODO_BACKGROUND_MUTATION, {
        id,
        backgroundImage,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todosList"] });
    },
  });
};
