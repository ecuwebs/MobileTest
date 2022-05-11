import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../config/colors';
import AppText from './AppText';

const PostsCard = ({ item, onPress, style, ...otherProps }) => {

  if (otherProps.loading) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[ styles.loadingContainer, style ]}>
          <AppText loading style={styles.titleLoading}>.................</AppText>
        </View>
      </TouchableWithoutFeedback>      
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[ styles.container, style ]}>

        {item.favorite && (
          <View style={styles.icon}>
            <Entypo
              size={26}
              color={Colors.primary}
              name='star'
            />
          </View>
        )}

        <View style={[ styles.title, { paddingLeft: item.favorite ? 0 : 10 } ]}>
          <Text>{ item.title }</Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  loadingContainer: {
    padding: 10
  },
  icon: { 
    justifyContent: 'center', 
    paddingVertical: 10, 
    paddingHorizontal: 10 
  },
  title: { 
    justifyContent: 'center', 
    flex: 1, 
    paddingVertical: 10, 
    paddingRight: 10
  },
  titleLoading: {
    width: '100%'
  }
});

export default PostsCard;
