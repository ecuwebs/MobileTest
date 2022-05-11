import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmptyResults = ({
  msg,
  onReload
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
      {onReload && (
        <TouchableOpacity onPress={onReload}>
          <Ionicons
            name="md-reload-sharp"
            size={100}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default EmptyResults;
