class MessagesController < ApplicationController
  def index; end

  def random
    @messages = Message.all.sample
    render json: @messages, status: 200
  end
end
