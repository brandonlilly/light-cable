import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import createRoom from './room'
import reducer from './reducers'
import { createScene } from './scene/scene'
import { generateUUID } from './utils/player'
import { createPlayer } from './scene/player'

const uuid = generateUUID()
console.log('uuid', uuid);

const store = createStore(
  reducer,
  undefined,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

$(function onLoad() {
  console.log('App begin')

  ReactDOM.render((
    <Provider store={store}>
      <Root/>
    </Provider>
  ), document.getElementById('app'))

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
    console.log('setting ', uuid, 'to', coords.x, coords.y, coords.z)
    if (!otherPlayers[uuid]) {
      addPlayer(uuid)
    }
    otherPlayers[uuid].position.set(coords.x, coords.y, coords.z)
  }

  const { room, cable } = createRoom(store, uuid, setPosition, connectPlayer)
  window.App = {}
  App.room = room
  App.cable = cable
})
