import React from 'react';
import Constants from 'expo-constants';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Screen = ({ children, style, fullScreen = false }) => {
  const { bottom: safeAreaInsetBottom } = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.screen,
        style,
        { marginBottom: fullScreen ? safeAreaInsetBottom : 0 },
      ]}
    >
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? 0 : Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
