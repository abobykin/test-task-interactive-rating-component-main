'use strict'

let form = document.querySelector('#ratingForm')
let ratingValue = null

function setRating() {
  document.querySelector('#ratingValue').innerHTML = ratingValue
}

function showThankyou() {
  document.querySelector('.rating-state').classList.add('hidden')
  document.querySelector('.thank-you-state').classList.remove('hidden')
}

form.onsubmit = function (event) {
  event.preventDefault()

  ratingValue = document.querySelector('input[name="rating"]:checked').value

  setRating()
  showThankyou()
}

const inputRatings = document.querySelectorAll('input[name="rating"]')
const submitBtn = document.querySelector('input[type="submit"]')

inputRatings.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.checked === true) {
      submitBtn.disabled = false
    }
  })
})
