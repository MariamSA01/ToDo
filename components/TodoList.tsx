import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../util/https';


type Todo = {
    id: string;
    title: string;
    completed: boolean;
  };

const TodoList = () => {
//   const todos = useSelector((state: any) => state.todos.todos);
  const [fetchedTodos, setFetchedTodos] = useState<Todo[]>([])

  useEffect(()=>{
    async function getTodo(){
        const todos = await fetchTodos()
        setFetchedTodos(todos)
    }
    getTodo()
  },[])

  return (
    <View>
      <FlatList 
        data={fetchedTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
};

export default TodoList;
