import * as React from 'react';
import { Text as DefaultText, View as DefaultView, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = 'light'; // useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button({ color = "#BA7CC6", onPress, title, disabled }) {
  return (
      <TouchableOpacity onPress={disabled ? undefined : onPress}>
        <View style={{ backgroundColor: color, width: '100%', padding: 10, borderWidth: 1, borderColor: '#333', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
  )
}
