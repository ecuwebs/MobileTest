import React from 'react';
import Posts from '../components/Posts';

const FavoritesScreen = ({ items, onItemPressed }) => 
  <Posts 
    data={items} 
    emptyMessage='There are no favorites.'
    onItemPressed={onItemPressed}
    showDeleteAllButton={false}
  />

export default FavoritesScreen;