import React from 'react'

const Messages = ({ messages, user_id }) => {
    return (
        <div>
            Messages {user_id}
            {/* {JSON.stringify(messages)} */}
            {messages.map((message, i) => (
                <div key= {message._id}>{message.text}</div>
            ))}


        </div>
    )
}

export default Messages
