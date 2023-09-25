//https://gist.github.com/aymericbeaumet/d1d6799a1b765c3c8bc0b675b1a1547d
function nextUnlike() {
  return document.querySelector('[data-testid="unlike"]')
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function removeAll() {
  let count = 0
  let next = nextUnlike()
  while (next) {
    next.focus()
    next.click()
    console.log(`Unliked ${++count} tweets`)
    await wait(count % 50 === 0 ? 30000 : 2000)
    next = nextUnlike()
  }
  console.log('Out of unlikes, count =', count)
}

removeAll() 