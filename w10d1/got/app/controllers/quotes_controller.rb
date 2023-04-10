class QuotesController < ApplicationController
  def index
    character_id = params[:character_id]
    @character = Character.find(character_id)
    @quotes = @character.quotes

    render json: {
      character: @character,
      quotes: @quotes
    }
  end
end
