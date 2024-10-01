import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, completedItem } from '../redux/todoSlice';
import {deleteTodoFB, updateTodoFB} from '../util/https'
 
 
export type Todo = { id: string; title: string; completed: boolean; };
type TodoItemProps = {
  todo: Todo;
}
 
 
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();
    async function handleDelete (){
        await deleteTodoFB(todo.id);
        dispatch(deleteTodo(todo.id));
      };
      async function onCompletedPress(){
        dispatch(completedItem({ ...todo, completed: !todo.completed }));
        await updateTodoFB(todo.id, { ...todo, completed: !todo.completed})
      }
    
  return (
    <View style={style.container} testID='todoItem'>
      <Text style={todo.completed ? style.completed : style.uncompleted} testID="title">
        {todo.title}
      </Text>
      <Button title="Completed" onPress={onCompletedPress} testID='completedButton' />
      <Button title="Delete" onPress={handleDelete} testID='deleteButton' />
    </View>
  );
};
 
  const style = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 10,
      marginHorizontal: 10,
      backgroundColor: '#D3D3D3',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 8,
    },
    completed: {
      textDecorationLine: 'line-through'
    },
    uncompleted: {
      textDecorationLine: 'none'
    }
  });
 
export default TodoItem;
