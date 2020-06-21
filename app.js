const titleEl = document.querySelector('.game-title')

const titleText = titleEl.innerText

const targetUri = `https://www.dekudeals.com/search?q=${encodeURI(titleText)}`

const dekuDealsLink = `<a href="${targetUri}" target="_blank" rel="noopener noreferrer nofollow">View on DekuDeals.com</a>`

titleEl.insertAdjacentHTML('afterend', dekuDealsLink)
