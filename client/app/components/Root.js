import React, { Component } from 'react'
import { MessageList, MessageForm } from '../components'

class Root extends Component {
  render() {
    return (
      <div>
        <MessageForm
          sendMessage={(message) => {
            App.room.message(message)
          }} />
        <MessageList />
      </div>
    )
  }
}

export default Root
