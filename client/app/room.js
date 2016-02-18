export default (store, uuid, setPosition, connectPlayer, disconnectPlayer) => {
  const cable = ActionCable.createConsumer()
  const room = cable.subscriptions.create({ channel: "RootChannel", uuid }, {
    connected() {
      console.log('Root channel connected')
    },

    disconnected() {
      console.log('Root channel disconnected')
    },

    received: function(data) {
      console.log('recieved:', data)

      if (data.uuid === uuid) {
        console.log();
        return
      }

      switch (data.type) {
        case 'message':
          store.dispatch({
            type: 'ADD_MESSAGE',
            message: data['message'],
          })
          break
        case 'set_position':
          setPosition(data)
          break
        case 'player_connected':
          connectPlayer(data)
          break
        case 'player_disconnected':
          break
        default:
          console.log('Unknown type: ', data);
      }
    },

    message(message) {
      this.perform('message', { message })
    },

    set_position(coords) {
      this.perform('set_position', { coords })
    },
  })

  return { room, cable }
}
