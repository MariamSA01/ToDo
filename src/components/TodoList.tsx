import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../util/https';
import { addTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);
    const dispatch = useDispatch();

  useEffect(()=>{
    async function getTodo(){
        const fetchedTodos = await fetchTodos()
        fetchedTodos.forEach(todo =>{
            dispatch(addTodo(todo))
        })
    }
    getTodo()
  },[dispatch])

  return (
    <View style={styles.listContainer}>
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#F0F0F0', // Gray background for the todo list
    flex: 1,
    paddingVertical: 10,
  }
});

export default TodoList;
