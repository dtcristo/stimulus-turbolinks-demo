import { Controller } from 'stimulus'

export default class extends Controller {
  initialize() {
    console.log('!   Initialized controller')
  }

  connect() {
    console.log('--> Connected controller')
  }

  disconnect() {
    console.log('<-- Disconnected controller')
  }
}
