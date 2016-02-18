import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createScene } from './scene/scene'
import { generateUUID } from './utils/player'
import { createPlayer } from './scene/player'
import createChannel from './channel'
import reducer from './reducers'

const uuid = generateUUID()

const store = createStore(
  reducer,
  undefined,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch({
  type: 'SET_USER',
  user: {
    name: uuid,
    uuid: uuid,
  }
})

$(function onLoad() {
  const { scene, user } = createScene()

  let otherPlayers = {}

  const addPlayer = (uuid) => {
    const player = createPlayer()
    otherPlayers[uuid] = player
    scene.add(player)
  }

  const connectPlayer = ({ uuid }) => {
    addPlayer(uuid)
    user.sendPosition()
  }

  const setPosition = ({ uuid, coords }) => {
    if (!otherPlayers[uuid]) {
      addPlayer(uuid)
    }
    otherPlayers[uuid].position.set(coords.x, coords.y, coords.z)
  }

  const { channel, cable } = createChannel(store, uuid, setPosition, connectPlayer)
  window.App = { channel, cable }

  ReactDOM.render((
    <Provider store={store}>
      <Root/>
    </Provider>
  ), document.getElementById('app'))
})
