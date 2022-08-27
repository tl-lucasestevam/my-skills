import React, { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface SkillCardProps {
  children: ReactNode;
}

export const SkillCard = ({ children }: SkillCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{children}</Text>
    </TouchableOpacity>
  );
};
