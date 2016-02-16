export default (store) => {
  const cable = ActionCable.createConsumer()
  const room = cable.subscriptions.create("RootChannel", {
    connected() { console.log('Root channel connected') },
    disconnected() { console.log('Root channel disconnected') },

    received: function(data) {
      console.log('recieved:', data)
      store.dispatch({
        type: 'ADD_MESSAGE',
        message: data['message'],
      })
    },

    speak(message) {
      console.log('speaking:', message);
      this.perform('speak', { message: message })
    },
  })

  return { room, cable }
}
