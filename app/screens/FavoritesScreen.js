import React from 'react';
import Posts from '../components/Posts';
import Screen from '../components/Screen';

const FavoritesScreen = ({ items, onItemPressed }) => 
  <Screen>
    <Posts 
      data={items} 
      emptyMessage='There are no favorites.'
      onItemPressed={onItemPressed}
      showDeleteAllButton={false}
    />
  </Screen>

export default FavoritesScreen;