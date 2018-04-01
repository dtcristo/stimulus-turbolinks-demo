import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'pages' ]
  pagesTarget: HTMLElement

  load() {
    this.pageNumber++
    let url = this.data.get('pageUrl').replace('PAGE_NUMBER', this.pageNumber.toString())
    var x = fetch(url)
      .then(response => response.text())
      .then(html => {
        this.pagesTarget.insertAdjacentHTML('beforeend', html)
      })
  }

  private get pageNumber(): number {
    return parseInt(this.data.get('pageNumber'))
  }

  private set pageNumber(value: number) {
    this.data.set('pageNumber', value)
  }
}
