import { useEffect, useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { getPosts } from '../api/getPosts';
import useApi from './useApi';
import storage from '../store/storage';

const usePosts = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPostsApi = useApi(getPosts);

  const onDetailFavorite = useCallback(async item => {

    const next = [...data];
    const index = next.findIndex(each => each.id === item.id);

    next[index].favorite = next[index].favorite ? 
      !next[index].favorite : true;

    await storage.update(next);
    setData(next);

  }, [data]);

  const deleteAll = async () => {
    await storage.empty();
    setData([]);
  }

  const onDeleteAll = async () => {
    Alert.alert(
      'Delete Posts',
      'Are you sure to delete all posts?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteAll(),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      }
    );
  }

  const fetchPosts = async () => {

    const cachedPosts = await storage.get();

    /**
     * Checks stored 
     * posts first (cache)
     */

    if(cachedPosts.length) {
      return cachedPosts;
    }

    const postsObj = await getPostsApi.request();

    /**
     * Add to cache
     */

    await storage.add(postsObj);
    return postsObj;

  }

  const onReload = async () => {
    setLoading(true);
    const postsObj = await fetchPosts();
    setData(postsObj);
    setLoading(false);
  }

  const attrs = useMemo(() => {
    const favorites = data.filter(each => each.favorite ? true : false);
    const normal = data.filter(each => each.favorite ? false : true);

    return ({
      favorites,
      posts: [...favorites, ...normal]
    });

  }, [data]);

  useEffect(() => {
    onReload();
  }, [])

  return {
    attrs,
    loading,
    onDetailFavorite,
    onDeleteAll,
    onReload
  }

}

export default usePosts;