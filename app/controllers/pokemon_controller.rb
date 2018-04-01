class PokemonController < ApplicationController
  def index
    @pokemon = pokemon_for_page(1)
  end

  def page
    @pokemon = pokemon_for_page(params[:page])
    render :_page, layout: false
  end

  private
    def pokemon_for_page(page_number)
      offset = 10 * (page_number.to_i - 1)
      Pokemon.all.offset(offset).take(10)
    end
end
