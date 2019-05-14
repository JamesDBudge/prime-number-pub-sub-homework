const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    console.log(event.detail);
    const isPrime = event.detail
    this.displayResult(isPrime)
  })
};

ResultView.prototype.displayResult = function (isPrime) {
  const resultElement = document.querySelector('#result')

  if (isPrime === true ) {
    PubSub.subscribe('FormView:inputted-number', (event) => {
      number = Number(event.detail)
      resultElement.textContent = `Yes, ${number} is Prime!`
    })
  } else {
    resultElement.textContent = "Not Prime!"
  }
};

module.exports = ResultView
