document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    var elements = document.getElementsByClassName('ant-modal-root')
    for(var i = 0; i != elements.length; ++i) {
      elements[i].style.visibility = "hidden"
    }
  }, 3000)
})