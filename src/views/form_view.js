const PubSub = require('../helpers/pub_sub.js')

const FormView = function () {


}

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputtedNumber = event.target[0].value
    PubSub.publish('FormView:inputted-number', inputtedNumber)
  } )
};

module.exports = FormView;
