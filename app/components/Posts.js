import React from 'react';
import { FlatList } from 'react-native';
import { Button } from './button'
import PostsCard from './PostsCard';
import Separator from './Separator';
import fill from '../lib/fill';
import EmptyResults from './EmptyResults';

const Posts = ({ 
  data, 
  emptyMessage = 'Press on reload to load posts.',
  loading, 
  loadingItems = 25, 
  onDeleteAll, 
  onItemPressed, 
  onReload, 
  showDeleteAllButton = true,
  style }) => {

  const getFlatList = (items, renderItem) => {
    return (  
      <FlatList
        data={items}
        ItemSeparatorComponent={() => (
          <Separator/>
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={style}
      />
    );
  };

  if (loading) {
    return getFlatList(
      fill(loadingItems, (_, index) => ({ id: index.toString() })),
      () => (
        <PostsCard loading />
      )
    );
  }

  if (!data.length) {
    return (
      <EmptyResults msg={emptyMessage} onReload={onReload}/>
    );
  } 

  return (
    <>
      {
        getFlatList(data, ({ item }) => (
          <PostsCard
            item={item}
            onPress={() => onItemPressed(item)}
          />
        ))
      }
      
      { showDeleteAllButton && <Button color='danger' onPress={onDeleteAll} title='Eliminar'/> }
    </>
  )


}

export default Posts;
