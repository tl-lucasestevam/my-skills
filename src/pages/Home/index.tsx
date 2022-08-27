import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Button';
import { styles } from './styles';

export const Home = (): JSX.Element => {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const handleAddSkill = () => {
    if (!skill) {
      return;
    }

    setSkills(oldValue => [...oldValue, skill]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Lucas</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setSkill}
        value={skill}
      />
      <Button onPress={handleAddSkill}>Add</Button>
      <Text style={[styles.title, { marginTop: 30, marginBottom: 10 }]}>
        My Skills
      </Text>
      {skills.map(skillName => (
        <TouchableOpacity
          key={skillName}
          activeOpacity={0.7}
          style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skillName}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};
