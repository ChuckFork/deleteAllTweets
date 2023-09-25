function nextUnlike() {
    return document.querySelector('[data-testid="unretweet"]')
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
      console.log(`Unretweet ${++count} tweets`)
      await wait(count % 50 === 0 ? 30000 : 2000)
      next = nextUnlike()
    }
    console.log('Out of unretweets, count =', count)
  }
  
  removeAll() 