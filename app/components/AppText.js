import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../config/colors';

const AppText = ({ children, style, ...otherProps }) => {

  if (otherProps.loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={[styles.text, styles.loadingText, style]} {...otherProps}>
          {children}
        </Text>
      </View>
    );
  }

  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loadingText: {
    backgroundColor: Colors.mediumDark,
    color: Colors.mediumDark,
  },
});

export default AppText;
