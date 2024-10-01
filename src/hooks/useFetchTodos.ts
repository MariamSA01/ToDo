import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { fetchTodos } from '../util/https';
import { RootState } from '../redux/store';


const useFetchTodos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTodo() {
      const fetchedTodos = await fetchTodos();
      fetchedTodos.forEach(todo => {
        dispatch(addTodo(todo));
      });
    }

    getTodo();
  }, [dispatch]);

  return todos;
};

export default useFetchTodos;
