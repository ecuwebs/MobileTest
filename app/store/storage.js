import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'posts';

const add = async posts => {
  await AsyncStorage.setItem(key, JSON.stringify(posts));
};

const empty = async () => AsyncStorage.removeItem(key);

const get = async () => {
  const res = await AsyncStorage.getItem(key);
  return res && res !== 'null' ? JSON.parse(res) : [];
};

const update = async posts => {
  await AsyncStorage.setItem(key, JSON.stringify(posts));
};

export default {
  add,
  empty,
  get,
  update
};
