import React, { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

export const Button = ({ children, onPress }: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
