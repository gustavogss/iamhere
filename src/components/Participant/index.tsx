import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';


import { styles } from './styles';

type ParticipantProps = {
name: string;
onRemove: () => void;
}



export function Participant({name, onRemove}:ParticipantProps) {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
        <Text style={styles.participant}>{name}</Text>       
    </View>
     <TouchableOpacity style={styles.btn} onPress={onRemove} >
     <Text style={styles.txtBtn}>-</Text>
   </TouchableOpacity>
   </View>
  );
}