import React, { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleUserAdd() {
    if(participants.includes(participantName)){
      return  Alert.alert("Participante existe", "Já existe um participante na lista com esse nome");
    }
    if(!participantName){
      return Alert.alert('Campo vazio', 'Digite o nome do participante')
    }
    setParticipants(prevState => [...prevState, participantName])  
    setParticipantName('');
  }

  function handleUserRemove(name: string){
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !==name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Iamhere</Text>
      <Text style={styles.evenData}>{    
new Date().toLocaleString('pt-BR')
}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#aaa"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
          <Text style={styles.txtBtn}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList       
      data={participants} 
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
        key={item}
        name={item} 
        onRemove={() => handleUserRemove(item)}
        />    
        )} 
        showsVerticalScrollIndicator={false}    
     ListEmptyComponent={()=>(
      <Text style={styles.listEmptyText}>
        Ninguém chegou no evento ainda? Adicione participantes a sua lista
      </Text>
     )}
        />           
        </View>    
  )
      }