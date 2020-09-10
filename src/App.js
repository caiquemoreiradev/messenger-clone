import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { FiSend } from 'react-icons/fi';

import './App.css';

import Message from './components/Message';
import { db } from './services/firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className="app">
      <div className="content">
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
        <h1>Welcome {username}</h1>

        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>

      <form className='form__container'>
        <FormControl className='input__container'>
          <div className="form__control">
            <Input
              placeholder='Enter a message...'
              className='input__container'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button
              disabled={!input}
              type='submit'
              onClick={sendMessage}
            >
              <FiSend className='icon__send' color={!input && `${'#e9e9eb' || '#0b81ff'}`} size={25} />
            </button>
          </div>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
