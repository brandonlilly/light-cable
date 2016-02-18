import React from 'react'

const MessageForm = ({ sendMessage }) => {
  let input
  let onSubmit= (e) => {
    sendMessage(input.value)
    input.value = ''
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Say something</label><br/>
        <input ref={node => { input = node }} />
        <button>Send</button>
      </form>
    </div>
  )
}

export default MessageForm
