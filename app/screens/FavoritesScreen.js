import React from 'react';
import Posts from '../components/Posts';
import Screen from '../components/Screen';

const FavoritesScreen = ({ items, loading, onItemPressed }) => 
  <Screen fullScreen={true}>
    <Posts 
      data={items} 
      emptyMessage='There are no favorites.'
      loading={loading}
      onItemPressed={onItemPressed}
      showDeleteAllButton={false}
    />
  </Screen>

export default FavoritesScreen;