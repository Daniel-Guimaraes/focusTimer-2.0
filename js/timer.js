export default function timer({
  minutesDisplay,
  secondsDisplay,
  minutes,
  resetSound,
  alertTimerIsOver
}) {
  let timerTimeOut

  function addTime() {
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
    minutes = Number(minutesDisplay.textContent)
  }

  function reduceTime() {
    if (minutes >= 5) {
      minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
    } else {
      alert('O tempo não pode mais ser reduzido')
    }

    minutes = Number(minutesDisplay.textContent)
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let timerIsOver = minutes <= 0 && seconds <= 0

      updateTime(minutes, 0)

      if (timerIsOver) {
        resetTime()
        resetSound()
        alertTimerIsOver()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTime(minutes, String(seconds - 1))

      countDown()
    }, 1000)
  }

  function updateTime(minutes, seconds) {
    minutes = minutesDisplay.textContent = String(minutes).padStart(2, '0')

    seconds = secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function resetTime() {
    updateTime(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  return {
    updateTime,
    countDown,
    resetTime,
    addTime,
    reduceTime
  }
}
