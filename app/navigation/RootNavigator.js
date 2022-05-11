import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Colors from '../config/colors';
import DetailScreen from '../screens/DetailScreen';
import usePosts from '../hooks/usePosts';

const Stack = createStackNavigator();

const RootNavigator = () => {

  const { 
      attrs, 
      loading,
      onDetailFavorite, 
      onDeleteAll, 
      onReload } = usePosts();

  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
        shadowOpacity: 0,
      }
    }}>
      <Stack.Screen
        name='TabNavigator'
        options={() => ({
          title: 'Posts',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => onReload()} 
              style={styles.favoriteIcon}>
              <Ionicons
                size={24}
                color={Colors.white}
                name='reload'
              />
            </TouchableOpacity>
          ),
        })}
      >
        {props => (
          <TabNavigator 
            favorites={attrs.favorites}
            loading={loading}
            posts={attrs.posts} 
            onDeleteAll={onDeleteAll} 
            onReload={onReload} 
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name='Detail'
        options={props => ({
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => onDetailFavorite(props.route.params)} 
              style={styles.favoriteIcon}>
              <FontAwesome
                size={24}
                color={Colors.white}
                name={props.route.params.favorite ? 'star' : 'star-o'}
              />
            </TouchableOpacity>
          ),
        })}
        >
          {props => (
            <DetailScreen {...props}/>
          )}
      </Stack.Screen>

    </Stack.Navigator>
  );
};  

const styles = StyleSheet.create({
  favoriteIcon: { 
    marginRight: 15
  },
});

export default RootNavigator;
