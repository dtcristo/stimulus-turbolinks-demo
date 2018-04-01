import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'replace' ]
  replaceTarget: HTMLElement

  // Triggered by `ajax:success` event on form
  response(e) {
    this.replaceTarget.outerHTML = e.detail[2].responseText
  }

  // Triggered by `ajax:error` event on form
  exception(e) {
    alert('An unexpected error occured, please try again.')
  }
}
