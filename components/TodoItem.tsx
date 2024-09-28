import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';


interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean; };
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <View style={style.container}>
      <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </Text>
      <Button title="Completed" onPress={()=>{}} />
      <Button title="Delete" onPress={()=>{}} />
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
