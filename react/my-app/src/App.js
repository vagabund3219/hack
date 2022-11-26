import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import avatar from './assets/icons/avatar.png'
import MessageList from './components/MessageList/MessageList'


function App() {
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
    <div className="App">
        <MessageList/>
    </div>
  );
}

export default App;
