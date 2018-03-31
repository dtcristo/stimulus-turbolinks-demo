import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'value' ]
  valueTarget: HTMLElement

  increment() {
    this.value = this.value + 1
  }

  decrement() {
    this.value = this.value - 1
  }

  private get value(): number {
    return parseInt(this.valueTarget.textContent)
  }

  private set value(newValue: number) {
    this.valueTarget.textContent = newValue.toString()
  }
}
