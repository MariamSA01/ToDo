import TodoItem from "./TodoItem";
import { act, create } from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Button } from "react-native";
 
const todoItem = {
    id: 'id',
    title: 'title',
    completed: false,
};
const setup = () => create(<Provider store={store}>
    <TodoItem todo={todoItem} />
</Provider>);
describe('Todo item', () => {
    it('should render successfully', () => {
        const component = setup();
        const todo = component.root.findByProps({ testID: 'todoItem' });
        const buttons = todo.findAllByType(Button);
 
        expect(component).toBeDefined();
        expect(todo).toBeDefined();
        expect(buttons.length).toBe(2);
 
        component.unmount();
    });
    it('should change title style when delete button is pressed', () => {
        const component = setup();
        const title = component.root.findByProps({ testID: 'todoItem' })?.findByProps({ testID: 'title' });
        const completedButton = component.root.findByProps({ testID: 'completedButton' });
 
        expect(title?.props?.style.textDecorationLine).toBe('none');
 
        act(() => completedButton.props.onPress());
 
        waitFor(() => expect(title?.props?.style.textDecorationLine).toBe('line-through'));
 
        component.unmount();
    });
 
});