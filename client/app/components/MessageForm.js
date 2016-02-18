import React from 'react'

const MessageForm = ({ sendMessage }) => {
  let input
  let onSubmit= (e) => {
    sendMessage(input.value)
    input.value = ''
    e.preventDefault()
  }

  return (
    <div className="messageForm">
      <form onSubmit={onSubmit}>
        <input ref={node => { input = node }} id="messageInput" />
      </form>
    </div>
  )
}

export default MessageForm
