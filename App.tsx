import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName='';

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
          <Tab.Screen name="TodoForm" component={TodoForm} />
          <Tab.Screen name="TodoList" component={TodoList} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
