import visa from '../../imgs/visa.png'
import mastercard from '../../imgs/mastercard.png'
import mir from '../../imgs/mir.png'

export class RenderValidator {
  constructor () {
    this.html = `
        <div class="card-input-container">
          <img src=${mir} alt="Mir" class="card-icon mir">
          <img src=${visa} alt="Visa" class="card-icon visa">
          <img src=${mastercard} alt="Mastercard" class="card-icon mastercard">
          <div class="card-input">
            <input type="text" class="input-field "id="card-number" name="card-number" placeholder="Введите номер карты" maxlength="16">
          </div>
            <button id="check-button" class ="submit">Проверить</button>
        </div>
        `
  }

  renderValidator (parentElem) {
    if (typeof parentElem === 'string') {
      parentElem = document.querySelector(parentElem)
    }
    if (parentElem) {
      parentElem.insertAdjacentHTML('afterbegin', this.html)
    } else {
      document.body.innerHTML = this.html
    }
  }

  getElement () {
    return document.querySelector('.card-input-container')
  }
}
