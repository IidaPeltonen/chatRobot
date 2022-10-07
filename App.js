import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import uuid from 'react-uuid';
import { GiftedChat } from 'react-native-gifted-chat';
import { useCallback, useState, useEffect } from 'react';

export default function App() {

  const [messages, setMessages] = useState([]);

  const replies = [
    'Mitä kuuluu?',
    'Onko kivaa?',
    'Tykkäätkö kissoista?',
    'Mikä nimesi on?',
    'Missä asut?'
  ]

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    let newMessage = 
    [
      {
        _id: uuid(),
        text: replies[Math.floor(Math.random() * replies.length)],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '?'
        },
      },
    ]
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
  }, [])

  return (
    <GiftedChat
      messages={replies}
      onSend={replies => onSend(replies)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
 