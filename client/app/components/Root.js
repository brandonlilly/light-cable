import React, { Component } from 'react'
import { TopBar, MessageList, MessageForm } from '../components'

class Root extends Component {
  render() {

    return (
      <div>
        <TopBar />
        <div className="sideBar">
          <MessageForm
            sendMessage={(message) => {
              App.channel.message(message)
            }} />
          <MessageList />
        </div>
      </div>
    )
  }
}

export default Root
