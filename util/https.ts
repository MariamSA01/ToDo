import axios from 'axios';

interface todo{
    title: string;
    completed: boolean;
}
export function storeToDo(toDoData:todo){
    axios.post('https://todolist-6fd42-default-rtdb.firebaseio.com/toDo.json',
    toDoData
    );
}