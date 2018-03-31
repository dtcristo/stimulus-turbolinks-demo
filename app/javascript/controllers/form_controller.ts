import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'replace' ]
  replaceTarget: HTMLElement

  response(e) {
    this.replaceTarget.outerHTML = e.detail[2].responseText
  }

  exception(e) {
    alert('An unexpected error occured, please try again.')
  }
}
