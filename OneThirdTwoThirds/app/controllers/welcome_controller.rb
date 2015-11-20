class WelcomeController < ApplicationController

  def index
    @welcome = Welcome.all
  end

  def show
    @welcome = Welcome.find(params[:id])
  end
end
