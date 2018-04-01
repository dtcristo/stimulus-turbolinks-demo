import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'slide' ]
  slideTargets: HTMLElement[]

  initialize() {
    this.showCurrentSlide()
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  private showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle('slide--current', this.index == i)
    })
  }

  private get index() {
    return parseInt(this.data.get('index'))
  }

  private set index(value) {
    // Wrap value by number of slides
    let slideCount = this.slideTargets.length
    value = (value % slideCount + slideCount) % slideCount
    this.data.set('index', value)
    this.showCurrentSlide()
  }
}
