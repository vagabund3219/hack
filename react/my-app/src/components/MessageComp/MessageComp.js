import React, {useState} from "react";
import styles from '../MessageComp/messageComp.css'

function MessageComp(props) {
    return (
      <div className='chat_item'>
                <img src={props.avatar} alt="" className='avatar'></img>
                <div className='chat_text'>
                    <div className='chat_title'>{props.username}</div>
                    <div className='chat_message'>{props.messagePreview}</div>
                </div>
      </div>
    );
  }
  
  export default MessageComp