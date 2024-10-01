import React from 'react';
import TodoList from '../components/TodoList';
import useFetchTodos from '../hooks/useFetchTodos';

const TodoListScreen = () => {
  const todos = useFetchTodos();

  return <TodoList todos={todos} />;
};
export default TodoListScreen;
