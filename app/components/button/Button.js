import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../config/colors';
import AppText from '../AppText';
import btnProps from './btnProps';

const AppButton = ({
  color = 'primary',
  disabled = false,
  Icon,
  iconColor = 'white',
  iconName,
  iconBackground,
  loading = false,
  onPress,
  size = 'md',
  style,
  textColor = 'white',
  title,
  width = '100%',
}) => {
  const activeOpacity = 1;
  const disabledOpacity = 0.5;

  const btnStyle = {
    backgroundColor: Colors[color],
    borderColor: Colors[color],
  };

  const textSize = {
    fontSize: btnProps[size].fontSize,
    paddingLeft: btnProps[size].paddingLeft(width),
    paddingRight: btnProps[size].paddingRight,
    paddingVertical: btnProps[size].paddingVertical,
  };

  const iconProps = iconBackground
    ? {
        style: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: iconBackground,
          paddingVertical: 15,
          width: 50,
        },
      }
    : {
        style: [styles.icon, btnProps[size].iconProps],
      };

  const dis = disabled || loading;

  return (
    <TouchableOpacity activeOpacity={0.8} disabled={dis} onPress={onPress}>
      <View
        style={[
          styles.button,
          btnStyle,
          { opacity: dis ? disabledOpacity : activeOpacity },
          style,
        ]}
      >
        {Icon && iconName ? (
          <View {...iconProps}>
            {loading ? (
              <ActivityIndicator color={Colors[color]} />
            ) : (
              <Icon
                color={iconColor}
                name={iconName}
                size={btnProps[size].iconSize}
              />
            )}
          </View>
        ) : (
          loading && (
            <View {...iconProps}>
              <ActivityIndicator color={Colors.white} />
            </View>
          )
        )}
        <AppText style={[styles.text, textSize, { color: Colors[textColor] }]}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
  },
  text: {
    flexGrow: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;
