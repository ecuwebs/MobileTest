import React from 'react';
import Posts from '../components/Posts';
import Screen from '../components/Screen';

const AllPostsScreen = ({ items, onDeleteAll, onItemPressed, onReload }) => 
  <Screen>
    <Posts 
      data={items} 
      onItemPressed={onItemPressed} 
      onDeleteAll={onDeleteAll} 
      onReload={onReload}
    />
  </Screen>

export default AllPostsScreen;