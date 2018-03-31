import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'value' ]
  valueTarget: HTMLElement

  increment() {
    let newValue = this.getValue() + 1
    this.setValue(newValue)
  }

  decrement() {
    let newValue = this.getValue() - 1
    this.setValue(newValue)
  }

  private getValue(): number {
    return parseInt(this.valueTarget.textContent)
  }

  private setValue(value: number) {
    this.valueTarget.textContent = value.toString()
  }
}
