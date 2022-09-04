import { variables } from './variables.js'
import timer from './timer.js'
import Sounds from './sounds.js'

const {
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
} = variables


const sound = Sounds({
  volForest,
  volFireplace,
  volRain,
  volCoffeshop
})

const time = timer({
  minutes,
  minutesDisplay,
  secondsDisplay,
  resetSound: sound.pause,
  alertTimerIsOver: sound.alertTimerIsOver
})


function darkMode() {
  body.classList.add('dark-mode')
  buttonDarkTheme.classList.remove('hide')
  buttonLightTheme.classList.add('hide')
}

function lightMode() {
  body.classList.remove('dark-mode')
  buttonLightTheme.classList.remove('hide')
  buttonDarkTheme.classList.add('hide')
}


buttonLightTheme.addEventListener('click', darkMode)

buttonDarkTheme.addEventListener('click', lightMode)

buttonPlay.addEventListener('click', () => {
  time.countDown()
})

buttonStop.addEventListener('click', () => {
  time.resetTime()
  sound.pause()
})

buttonAddTime.addEventListener('click', () => {
  time.addTime()
})

buttonReduceTime.addEventListener('click', () => {
  time.reduceTime()
})

buttonSoundForest.addEventListener('click', () => {
  sound.ForestStart()

  sound.CoffeshopPause()
  sound.FireplacePause()
  sound.RainPause()
})

buttonSoundRain.addEventListener('click', () => {
  sound.RainStart()

  sound.ForestPause()
  sound.CoffeshopPause()
  sound.FireplacePause()
})

buttonSoundCoffeshop.addEventListener('click', () => {
  sound.CoffeshopStart()

  sound.ForestPause()
  sound.FireplacePause()
  sound.RainPause()
})

buttonSoundFireplace.addEventListener('click', () => {
  sound.FireplaceStart()

  sound.ForestPause()
  sound.CoffeshopPause()
  sound.RainPause()
})

volForest.addEventListener('input', () => {
  sound.volAudioForest()
})

volRain.addEventListener('input', () => {
  sound.volAudioRain()
})

volCoffeshop.addEventListener('input', () => {
  sound.volAudioCoffeshop()
})

volFireplace.addEventListener('input', () => {
  sound.volAudioFireplace()
})


