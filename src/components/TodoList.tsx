import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem, { Todo, } from './TodoItem';
 
export interface TodoListProps {
  todos: Todo[];
};
const TodoList = ({ todos }: TodoListProps) => {
  return (
      <FlatList
      data={todos}
      testID='todoList'
      style={styles.listContainer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
    />
  );
};
 
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    paddingVertical: 10,
  }
});
 
export default TodoList;
 