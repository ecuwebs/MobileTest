import React from 'react';
import Posts from '../components/Posts';
import Screen from '../components/Screen';

const AllPostsScreen = ({ items, loading, onDeleteAll, onItemPressed, onReload }) => 
  <Screen fullScreen={true}>
    <Posts 
      data={items} 
      loading={loading}
      onItemPressed={onItemPressed} 
      onDeleteAll={onDeleteAll} 
      onReload={onReload}
    />
  </Screen>

export default AllPostsScreen;