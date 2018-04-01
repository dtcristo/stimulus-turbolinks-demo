import { Controller } from 'stimulus'
import * as $ from 'jquery'

export default class extends Controller {
  static targets = [ 'toggle', 'detachment', 'cache' ]
  toggleTarget: HTMLElement
  detachmentTarget: HTMLElement
  cacheTarget: HTMLElement

  // State stored in controller, generally bad
  children: JQuery

  connect() {
    this.updateToggleText()
  }

  toggle() {
    if (this.isAttached()) {
      this.detach()
    } else {
      this.attach()
    }
  }

  private detach() {
    this.children = $(this.detachmentTarget).children().detach()
    this.data.delete('attached')
    this.updateToggleText()
  }

  private attach() {
    this.children.appendTo(this.detachmentTarget)
    this.children = null
    this.data.set('attached', '')
    this.updateToggleText()
  }

  private updateToggleText() {
    if (this.isAttached()) {
      this.toggleTarget.innerText = 'Detach'
    } else {
      this.toggleTarget.innerText = 'Attach'
    }
  }

  private isAttached(): boolean {
    return this.data.has('attached')
  }
}
