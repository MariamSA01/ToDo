import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { addTodo } from '../redux/todoSlice';
import { storeToDo } from '../util/https';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {

    if (title.trim()) {
      storeToDo({title, completed:false});
      dispatch(addTodo({
        id: Date.now().toString(),
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
        style={style.input}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    marginTop: '20%',
    marginHorizontal: 10,
    backgroundColor: '#F5F5F5',
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
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#98FF98',
    padding: 8,
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
  },
});

export default TodoForm;