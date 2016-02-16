# Be sure to restart your server when you modify this file. Action Cable runs in an EventMachine loop that does not support auto reloading.
class RootChannel < ApplicationCable::Channel
  def subscribed
    stream_from "root_channel"
    # stream_from "room_channel_#{id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    message = Message.create! content: data['message']
    ActionCable.server.broadcast 'root_channel', message: message
  end
end
