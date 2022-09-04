export default function Sounds({
  volForest,
  volFireplace,
  volRain,
  volCoffeshop
}) {
  const bgAudioForest = new Audio('./assets/forest.wav')
  const bgAudioRain = new Audio('./assets/rain.wav')
  const bgAudioFireplace = new Audio('./assets/fireplace.wav')
  const bgAudioCoffeShop = new Audio('./assets/coffeshop.wav')
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioFireplace.loop = true
  bgAudioCoffeShop.loop = true

  function ForestStart() {
    bgAudioForest.play()
  }

  function ForestPause() {
    bgAudioForest.pause()
  }

  function RainStart() {
    bgAudioRain.play()
  }

  function RainPause() {
    bgAudioRain.pause()
  }

  function FireplaceStart() {
    bgAudioFireplace.play()
  }

  function FireplacePause() {
    bgAudioFireplace.pause()
  }

  function CoffeshopStart() {
    bgAudioCoffeShop.play()
  }

  function CoffeshopPause() {
    bgAudioCoffeShop.pause()
  }

  function pause() {
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioFireplace.pause()
    bgAudioCoffeShop.pause()
  }

  function alertTimerIsOver() {
    kitchenTimer.play()
  }

  function volAudioForest() {
    bgAudioForest.volume = volForest.value
  }

  function volAudioRain() {
    bgAudioRain.volume = volRain.value
  }

  function volAudioCoffeshop() {
    bgAudioCoffeShop.volume = volCoffeshop.value
  }

  function volAudioFireplace() {
    bgAudioFireplace.volume = volFireplace.value
  }

  return {
    ForestStart,
    ForestPause,
    RainStart,
    RainPause,
    FireplaceStart,
    FireplacePause,
    CoffeshopStart,
    CoffeshopPause,
    pause,
    alertTimerIsOver,
    volAudioForest,
    volAudioCoffeshop,
    volAudioRain,
    volAudioFireplace
  }
}
