import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);

  return (
    <View>
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
};

export default TodoList;
