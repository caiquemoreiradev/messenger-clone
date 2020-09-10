import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './styles.css';

const Message = forwardRef(({message, username}, ref) => {
  const isUser = username === message.username;

  return (
      <div ref={ref} className={`message__card ${isUser && 'message__user'}`}>
        <Card>
          <CardContent className={isUser ? "message__userCard" : "message__guestCard"}>
            <Typography
            color='white'
            variant='h5'
            component='h2'
            >
            {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
  );
})

export default Message;