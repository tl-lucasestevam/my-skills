import React from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Lucas</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 30 }]}>My Skills</Text>
    </SafeAreaView>
  );
};
