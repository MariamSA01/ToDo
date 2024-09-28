// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
