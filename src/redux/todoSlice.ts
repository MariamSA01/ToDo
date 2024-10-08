import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos =[action.payload, ...state.todos];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
    completedItem: (state, action: PayloadAction<Todo>) => {
    const index = state.todos.findIndex(todo => todo.id === action.payload.id);
    if (index !== -1) {
        state.todos[index] = action.payload;
    }
    },
  },
});

export const { addTodo, deleteTodo, completedItem } = todoSlice.actions;
export default todoSlice.reducer;
