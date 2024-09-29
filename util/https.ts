import axios from 'axios';

interface todo{
    title: string;
    completed: boolean;
}

const BACKEND_URL ='https://todolist-6fd42-default-rtdb.firebaseio.com'

export function storeToDo(toDoData:todo){
    axios.post(BACKEND_URL+'/toDo.json',
    toDoData
    );
}

export async function fetchTodos(){
   const response = await axios.get(BACKEND_URL+'/toDo.json')
   const todo = [];
   for(let key in response.data){
    const todoObj={
        id: key,
        title: response.data[key].title,
        completed: response.data[key].completed
    }
    todo.push(todoObj)
   }
   return todo;
}