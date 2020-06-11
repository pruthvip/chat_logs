import React from 'react'
import './MessageCard.css';

const MessageCard = ({ message,
  messageId,
  fullName,
  email,
  avatar,
  formattedTimeString
}) => {
  return (
    <div className="message-card" key={messageId}>
      <div className="message-card__name">
        {fullName}
      </div>
      {
        avatar ? (
          <div
            className="message-card__img tooltip"
          >
            <div className= "tooltiptext">
              {email}
            </div>
            <img src={avatar} alt={email} />
          </div>
        ) : null
      }
      <div className="message-card__content">
        {message}
      </div>
      <div className="message-card__time">
        {formattedTimeString}
      </div>
    </div>
  )
}

export default MessageCard;
