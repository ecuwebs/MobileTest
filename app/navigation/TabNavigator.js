import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../config/colors';
import AllPostsScreen from '../screens/AllPostsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({ onDeleteAll, onReload, favorites, posts, ...rest }) => {

  const {navigation} = rest;

  const onItemPressed = item => {
    navigation.navigate('Detail', item);
  }

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.primary,
        shadowOffset: {
          width: 0,
          height: 2
        },
        elevation: 12 
      },
      tabBarIndicatorStyle: {
        backgroundColor: Colors.white,
      },
      tabBarActiveTintColor: Colors.white,
    }}>
      <Tab.Screen name='All'>
        {props => (
          <AllPostsScreen 
            items={posts} 
            onDeleteAll={onDeleteAll}
            onItemPressed={onItemPressed}
            onReload={onReload}
            {...props} 
          />
        )}
      </Tab.Screen>

      <Tab.Screen name='Favorites'>
        {props => (
          <FavoritesScreen 
            items={favorites}
            onItemPressed={onItemPressed}
            {...props}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigator;