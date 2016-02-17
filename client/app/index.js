import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import createRoom from './room'
import reducer from './reducers'
import { createScene } from './scene/scene'

const store = createStore(
  reducer,
  undefined,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const { room, cable } = createRoom(store)
window.App = {}
App.room = room
App.cable = cable

$(function onLoad() {
  console.log('App begin')

  ReactDOM.render((
    <Provider store={store}>
      <Root/>
    </Provider>
  ), document.getElementById('app'))

  createScene()
})
