function nextUnretweet() {
    return document.querySelector('[data-testid="unretweet"]')
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function confirmUnreweet(){
    return document.querySelector('[data-testid="unretweetConfirm"]')
}

async function removeAll() {
    let count = 0
    let next = nextUnretweet()
    while (next) {
        next.focus()
        next.click()

        // Wait for the confirmation dialog to appear
        await wait(500);// Adjust the delay if necessary
        
        let confirm = confirmUnreweet();
        if (confirm) {
            confirm.focus();
            confirm.click();
        } else {
            console.warn("Confirm button not found");
        }

        console.log(`Unretweet ${++count} tweets`)
        await wait(count % 50 === 0 ? 30000 : 2000)
        next = nextUnretweet()
    }
    console.log('Out of unretweets, count =', count)
}

removeAll() 