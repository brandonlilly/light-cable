import React from 'react'
import { connect } from 'react-redux'

let MessageItem = ({ content, created_at }) => {
  return (
    <li className="messageItem">
      <span className="bold">{created_at}</span>
      {' '}
      <div>{content}</div>
    </li>
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
