const buttonLightTheme = document .querySelector('.light-theme')
const buttonDarkTheme = document.querySelector('.dark-theme')
const body = document.querySelector('body')

const volForest = document.querySelector('#volForest')
const volRain = document.querySelector('#volRain')
const volCoffeshop = document.querySelector('#volCoffeshop')
const volFireplace = document.querySelector('#volFireplace')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.most')
const buttonReduceTime = document.querySelector('.any-less')

const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffeshop = document.querySelector('.coffeshop')
const buttonSoundFireplace = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)



export const variables = {
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonReduceTime,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeshop,
  buttonSoundFireplace,
  minutesDisplay,
  secondsDisplay,
  minutes,
  buttonLightTheme,
  buttonDarkTheme,
  body,
  volCoffeshop,
  volFireplace,
  volForest,
  volRain
}
