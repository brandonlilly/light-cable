import React, { Component } from 'react'
import { MessageList } from '../components'

let Speak = ({ sendMessage }) => {
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

class Root extends Component {
  render() {
    return (
      <div>
        <Speak
          sendMessage={(message) => {
            App.room.message(message)
            console.log('message:', message)
          }} />
        <MessageList />
      </div>
    )
  }
}

export default Root
