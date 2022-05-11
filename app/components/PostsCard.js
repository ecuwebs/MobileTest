import React from 'react';
import { useDimensions } from '@react-native-community/hooks';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../config/colors';

const PostsCard = ({ item, onPress, style, ...otherProps }) => {

  const dimensions = useDimensions();
  const windowWidth = dimensions.window.width;
  const cardWidth = windowWidth / 2 - 15;
  const cardHeight = cardWidth * 1.6;

  if (otherProps.loading) {
    return null;
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
  }
});

export default PostsCard;
