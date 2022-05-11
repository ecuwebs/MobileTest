import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../config/colors';

const Separator = ({ horizontal = false, style }) => {
  if (horizontal) {
    return <View style={[ styles.horizontalSeparator, style ]} />;
  }

  return <View style={[ styles.separator, style]} />;
}

const styles = StyleSheet.create({
  horizontalSeparator: {
    height: '100%',
    width: 1,
    backgroundColor: Colors.mediumDark,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.mediumDark,
  },
});

export default Separator;
