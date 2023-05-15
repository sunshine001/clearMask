function includes(str, keys) {
  let flag = false
  for (let k of keys) {
    if (str.includes(k)) flag = true
  }
  return flag
}

function findParentDom(dom) {
  if (dom.tagName === "LI" || !dom.parentNode) {
    return dom
  } else {
    return findBingParentDom(dom.parentNode) 
  }
}

const KEYWORDS = ['Ad', '广告']

document.addEventListener('DOMContentLoaded', function() {
  let ads = Array.from(document.querySelectorAll('span')).filter(el => {
    return includes(el.textContent, KEYWORDS)
  })
  for (let ad of ads) {
    let rmDom = findParentDom(ad)
    if (rmDom) {
      rmDom.style.display = "none"
    }
  }
})