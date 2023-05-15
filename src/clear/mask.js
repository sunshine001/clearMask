const TOTAL_COUNT = 10

document.addEventListener('DOMContentLoaded', function() {
  let count = 0
  const timer = setInterval(() => {
    var elements = document.getElementsByClassName('ant-modal-root')
    if (elements.length > 0) {
      for(var i = 0; i != elements.length; ++i) {
        elements[i].style.visibility = "hidden"
      }
      count = TOTAL_COUNT
    }
    if (++count >= TOTAL_COUNT) {
      clearInterval(timer)
    }
  }, 500)
})