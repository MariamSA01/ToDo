import reducer, {addTodo, deleteTodo, completedItem} from './todoSlice';
 
const initialState = {
  todos: [],
};
 
const todos = [
  {id: '0', title: 'Test Todo', completed: false},
  {id: '1', title: 'Test Todo', completed: false},
];
 
describe('todoSlice', () => {
  test('should handle addTodo', () => {
    const newTodo = {id: '0', title: 'Test Todo', completed: false};
    const state = reducer(initialState, addTodo(newTodo));
 
    expect(state.todos).toEqual([newTodo]);
  });
 
  test('should handle deleteTodo', () => {
    const state = reducer({todos}, deleteTodo('0'));
    const remainingTodos = todos.filter(todo => todo.id !== '0');
    expect(state.todos).toEqual(remainingTodos);
  });
 
  test('should handle completedItem', () => {
    const updatedTodo = {id: '1', title: 'updated', completed: true};
 
    const state = reducer({todos}, completedItem(updatedTodo));
 
    expect(state.todos[1]).toEqual(updatedTodo);
  });
});