export class Validation {
  constructor (validatorContainer) {
    this.elem = validatorContainer
    this.inputField = validatorContainer.querySelector('.input-field')
    this.visaPattern = /^4/
    this.mastercardPattern = /^5[1-5]/
    this.mirPattern = /^2[0-9]/
    this.btn = validatorContainer.querySelector('#check-button')
  }

  setupInputHandler () {
    this.inputField.addEventListener('input', () => {
      const cardNumber = this.inputField.value

      this.elem.querySelectorAll('img').forEach(element => {
        element.classList.remove('active')
      })

      if (this.visaPattern.test(cardNumber)) {
        this.elem.querySelector('.visa').classList.add('active')
      } else if (this.mastercardPattern.test(cardNumber)) {
        this.elem.querySelector('.mastercard').classList.add('active')
      } else if (this.mirPattern.test(cardNumber)) {
        this.elem.querySelector('.mir').classList.add('active')
      }
    })
  }

  setupBtnHandler () {
    this.btn.addEventListener('click', () => {
      const cardNumber = this.inputField.value.replace(/\s/g, '')
      const digits = cardNumber.split('').map(Number)
      let sum = 0
      let double = false

      for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i]
        if (double) {
          digit *= 2
          if (digit > 9) {
            digit -= 9
          }
        }
        sum += digit
        double = !double
      }
      if (sum % 10 === 0 && cardNumber.length === 16) {
        this.btn.style.backgroundColor = '#24501b'
        this.btn.textContent = 'Данные валидны'
      } else {
        this.btn.style.backgroundColor = '#833b3b'
        this.btn.textContent = 'Данные не валидны'
      }
      setTimeout(() => {
        this.btn.style.backgroundColor = '#483b83'
        this.btn.textContent = 'Проверить'
      }, 1000)
    })
  }
}
