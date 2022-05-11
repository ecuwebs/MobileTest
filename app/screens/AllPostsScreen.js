import React from 'react';
import Posts from '../components/Posts';

const AllPostsScreen = ({ items, onDeleteAll, onItemPressed, onReload }) => 
  <Posts 
    data={items} 
    onItemPressed={onItemPressed} 
    onDeleteAll={onDeleteAll} 
    onReload={onReload}
  />

export default AllPostsScreen;