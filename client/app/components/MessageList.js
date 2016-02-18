import React from 'react'
import { connect } from 'react-redux'

let MessageItem = ({ author, content, created_at }) => {
  return (
    <li className="messageItem">{author}: {content}</li>
  )
}

let MessageList = ({ messages }) => {
  return (
    <div className="messageList">
      <ul>
        {messages.map(msg => (
          <MessageItem {...msg} key={msg.created_at} />
        ))}
      </ul>
    </div>
  )
}

let mapStateToProps = (state, props) => {
  const messages = Object.keys(state.messages).map(key => state.messages[key])
  return { messages }
}

export default connect(mapStateToProps)(MessageList)
