import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'value' ]
  valueTarget: HTMLElement
  value = 0

  increment() {
    this.value++
    this.refreshDom()
  }

  decrement() {
    this.value--
    this.refreshDom()
  }

  private refreshDom() {
    this.valueTarget.textContent = this.value.toString()
  }
}
