import React, { useEffect } from 'react';
import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { fetchTodos } from '../util/https';
 
const TodoListScreen = () => {
    const todos = useSelector((state: any) => state.todos.todos);
    const dispatch = useDispatch();
 
    useEffect(() => {
        async function getTodo() {
            const fetchedTodos = await fetchTodos();
            fetchedTodos.forEach(todo => {
                dispatch(addTodo(todo));
            });

        }
        getTodo();
    }, [ dispatch ]);
 
    return (<TodoList todos={todos} />
    )
}
export default TodoListScreen;
