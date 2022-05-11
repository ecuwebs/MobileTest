import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Colors from '../config/colors';

const Header = ({onReload, ...rest}) => {

  const {options} = rest;

  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <Text numberOfLines={1} style={styles.text}>
          {options.title}
        </Text>
        <TouchableOpacity onPress={onReload} style={styles.icon}>
          <Ionicons
            color={Colors.white}
            name='md-reload-sharp'
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: Platform.OS === 'ios' ? Constants.statusBarHeight + 44 : 56,
    justifyContent: 'center'
  },
  children: {
    marginTop:
    Platform.OS === 'ios'
      ? Constants.statusBarHeight > 20
        ? Constants.statusBarHeight - 10
        : Constants.statusBarHeight
      : 0,
  },
  icon: {
    position: 'absolute', 
    right: 15 
  },
  text: { 
    color: 'white', 
    fontSize: 20, 
    paddingRight: 0,
    textAlign: 'center', 
  }
});

export default Header;