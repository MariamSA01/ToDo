import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import TodoList from "./TodoList";
import store from "../redux/store";
import React from "react";
import TodoItem, { Todo } from "./TodoItem";
 
const todos: Todo[] = [ { id: "0", title: "title1", completed: false }, { id: "1", title: "title2", completed: true }, ];
const setup = () => create(<Provider store={store}><TodoList todos={todos} /></Provider>);
describe('Todo List', () => {
    it('should render successfully', () => {
        const component = setup();
 
        expect(component).toBeDefined();
        expect(component.root.findByProps({ testID: 'todoList' })).toBeDefined();
 
        component.unmount();
    });
 
    it('should render 2 todo items', () => {
        const component = setup();
        const todoItems = component.root.findAllByType(TodoItem);
 
        expect(todoItems.length).toEqual(2);
 
        component.unmount();
    });
 
    it('should pass props correctly', () => {
        const component = setup();
        const todoItems = component.root.findAllByType(TodoItem);
 
        expect(todoItems[ 0 ].props.todo.completed).toBeFalsy();
        expect(todoItems[ 0 ].props.todo.title).toBe('title1');
 
        expect(todoItems[ 1 ].props.todo.completed).toBeTruthy();
        expect(todoItems[ 1 ].props.todo.title).toBe('title2');
 
        component.unmount();
    });
});