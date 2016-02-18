# Be sure to restart your server when you modify this file. Action Cable runs in an EventMachine loop that does not support auto reloading.
class RootChannel < ApplicationCable::Channel
  def subscribed
    stream_from "root_channel"
    broadcast type: 'player_connected'
  end

  def unsubscribed
    broadcast type: 'player_disconnected'
  end

  def message(data)
    message = Message.create! content: data['message']

    broadcast type: 'message', message: message, author: params[:name]
  end

  def set_position(data)
    broadcast type: 'set_position', coords: data['coords']
  end

  private

  def broadcast(data)
    ActionCable.server.broadcast 'root_channel', {uuid: uuid}.merge(data)
  end

  def uuid
    params[:uuid]
  end
end
