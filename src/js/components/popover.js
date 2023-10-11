export class Popover {
  constructor (btn) {
    this.btn = btn
    this.show = false
  }

  init () {
    this.bindToDOM()
    this.btn.addEventListener('click', (e) => {
      e.preventDefault()
      this.showTooltip()
    })
  }

  static get markUp () {
    return `
          <div class="tooltip hidden">
            <div class="tooltip_content">
              <h3 class="tooltip_title">Popover title</h3>
              <p class="tooltip_text">And here's some amazing content.It's very engaging.Right?</p>
            </div>
          </div>
          `
  }

  get btnContainer () {
    return this.btn.closest('div')
  }

  get tooltip () {
    return this.btnContainer.querySelector('.tooltip')
  }

  bindToDOM () {
    this.btnContainer.insertAdjacentHTML('beforeend', this.constructor.markUp)
  }

  showTooltip () {
    this.tooltip.classList.toggle('hidden')
    this.show = !this.tooltip.classList.contains('hidden')
  }
}
