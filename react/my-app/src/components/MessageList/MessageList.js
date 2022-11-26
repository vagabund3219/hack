
import { useState } from 'react';
import './messageList.css';
import avatar from '../../assets/icons/avatar.png'
import MessageComp from '../MessageComp/MessageComp'


function MessageList() {
  const [messages, setMessages] = useState([
    {id: 1, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая модель...', avatar: avatar},
    {id: 2, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая модель...', avatar: avatar},
    {id: 3, username: 'Гений ', messagePreview: 'Равным образом модель...', avatar: avatar},
    {id: 4, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая модель...', avatar: avatar},
    {id: 5, username: 'Гений Евгеньевич', messagePreview: ' образом новая модель...', avatar: avatar},
    {id: 6, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая...', avatar: avatar},
    {id: 7, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая модель...', avatar: avatar},
    {id: 8, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая модель...', avatar: avatar},
    {id: 9, username: 'Гений Евгеньевич', messagePreview: 'Равным образом новая модель...', avatar: avatar},
  ])

  return (
         <div className='chats'>
              {messages.map(message => <MessageComp key={message.id }{...message}/>)}
         </div>
  );
}

export default MessageList;