export const GET_TODO_QUERY = `
  query GetTodos($status: String) {
    todos(status: $status) {
      id
      title
      content
      items {
        id
        text
        isCompleted
      }
      createdAt
      status
      backgroundImage
    }
  }
`;

export const CREATE_TODO_MUTATION = `
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      content
      items {
        id
        text
        isCompleted
      }
    }
  }
`;

export const DELETE_TODO_MUTATION = `
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      success
    }
  }
`;

export const UPDATE_TODO_MUTATION = `
  mutation UpdateTodo($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      content
      items {
        id
        text
        isCompleted
      }
    }
  }
`;

export const CHANGE_TODO_STATUS_MUTATION = `
  mutation ChangeTodoStatus($id: Int!, $newStatus: String!) {
    changeTodoStatus(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`;

export const TOGGLE_CHECKLIST_ITEM_MUTATION = `
  mutation ToggleChecklistItem($todoId: Int!, $itemId: Int!) {
    toggleChecklistItem(todoId: $todoId, itemId: $itemId) {
      id
      title
      content
      status
      items {
        id
        text
        isCompleted
      }
    }
  }
`;

export const UNCHECK_ALL_ITEMS_MUTATION = `
  mutation UncheckAllItems($id: Int!) {
    uncheckAllItems(id: $id) {
      id
      title
      content
      status
      items {
        id
        text
        isCompleted
      }
    }
  }
`;

export const UPDATE_TODO_BACKGROUND_MUTATION = `
  mutation UpdateTodoBackground($id: Int!, $backgroundImage: String!) {
    updateTodoBackground(id: $id, backgroundImage: $backgroundImage) {
      id
      title
      content
      status
      backgroundImage
      items {
        id
        text
        isCompleted
      }
    }
  }
`;
