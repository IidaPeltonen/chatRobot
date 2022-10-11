import { useCallback, useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import uuid from 'react-uuid';

const replies = [
  'Mitä kuuluu?',
  'Onko kivaa?',
  'Tykkäätkö kissoista?',
  'Mikä nimesi on?',
  'Missä asut?'
]

export default function App() {

  const [messages, setMessages] = useState([]);

    useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Moi!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '?'
        },
      },
    ])
  }, [])

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
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}


 