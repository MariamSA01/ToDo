import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Icon from 'react-native-vector-icons/Ionicons';
import TodoListScreen from './src/screens/TodoListScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      TodoForm: 'TodoForm',
      TodoList: 'TodoList',
    },
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName = '';

              if (route.name === 'TodoForm') {
                iconName = 'add-circle'; 
              } else if (route.name === 'TodoList') {
                iconName = 'list';
              } 

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#42f44b',
            tabBarInactiveTintColor: 'gray', 
          })}
        >
          <Tab.Screen name="TodoForm" component={AddTodoScreen} />
          <Tab.Screen name="TodoList" component={TodoListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
