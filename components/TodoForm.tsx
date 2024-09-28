import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { addTodo } from '../redux/todoSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        title,
        completed: false,
      }));
      setTitle('');
    }
  };

  return (
    <View style={style.container}>
      <TextInput 
        placeholder="Add a new task" 
        value={title} 
        onChangeText={setTitle} 
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};


const style = StyleSheet.create({
    container:{
        padding: 10,
        marginBottom: 10,
        marginTop:'20%',
        marginHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
})
export default TodoForm;