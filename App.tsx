import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';


const App = () => {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
