import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, completedItem } from '../redux/todoSlice';
import {deleteTodoFB} from '../util/https'


interface TodoItemProps {
  todo: { id: string; title: string; completed: boolean; };
}


const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();
    async function handleDelete (){
        console.log('deleteeee', todo.id)
        await deleteTodoFB(todo.id);
        dispatch(deleteTodo(todo.id));
      };
    const onCompletedPress = () => {
        dispatch(completedItem({ ...todo, completed: !todo.completed }));
    };
    
  return (
    <View style={style.container}>
      <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </Text>
      <Button title="Completed" onPress={onCompletedPress} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};
const style = StyleSheet.create({
    container:{
        padding: 10,
        marginTop:10,
        marginHorizontal: 10,
        backgroundColor: '#c2c2d6',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
})
export default TodoItem;
