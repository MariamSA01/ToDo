import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {storeToDo, fetchTodos, deleteTodoFB, updateTodoFB} from './https';
 
const mock = new MockAdapter(axios);
const BACKEND_URL = 'https://todolist-6fd42-default-rtdb.firebaseio.com';
 
describe('CRUD operations', () => {
  afterEach(() => {
    mock.reset();
  });
 
  test('storeToDo should post new todo', () => {
    const newTodo = {title: 'Test Todo', completed: false};
    mock.onPost(`${BACKEND_URL}/toDo.json`).reply(200, {name: '123'});
 
    storeToDo(newTodo);
 
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].data).toEqual(JSON.stringify(newTodo));
  });
 
  test('fetchTodos should return todos', async () => {
    const todos = {
      '1': {title: 'Test Todo 1', completed: false},
      '2': {title: 'Test Todo 2', completed: true},
    };
    mock.onGet(`${BACKEND_URL}/toDo.json`).reply(200, todos);
 
    const result = await fetchTodos();
 
    expect(result).toEqual([
      {id: '1', title: 'Test Todo 1', completed: false},
      {id: '2', title: 'Test Todo 2', completed: true},
    ]);
  });
 
  test('deleteTodoFB should delete a todo', async () => {
    const todoId = '123';
    mock.onDelete(`${BACKEND_URL}/toDo/${todoId}.json`).reply(200);
 
    await deleteTodoFB(todoId);
 
    expect(mock.history.delete.length).toBe(1);
    expect(mock.history.delete[0].url).toBe(
      `${BACKEND_URL}/toDo/${todoId}.json`,
    );
  });
 
  test('updateTodoFB should update an existing todo', async () => {
    const todoId = '123';
    const updatedTodo = {title: 'Updated Todo', completed: true};
    mock.onPut(`${BACKEND_URL}/toDo/${todoId}.json`).reply(200, updatedTodo);
 
    await updateTodoFB(todoId, updatedTodo);
 
    expect(mock.history.put.length).toBe(1);
    expect(mock.history.put[0].data).toEqual(JSON.stringify(updatedTodo));
  });
});