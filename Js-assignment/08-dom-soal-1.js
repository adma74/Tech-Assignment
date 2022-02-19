const elModalTitle = document.getElementById('modal-title')
const elModalImage = document.getElementById('modal-image')
const elModalText = document.getElementById('modal-text')

function clickCard(idCard) {
  console.log(idCard)
  const elCardTitle = document.getElementById(`${idCard}-title`)
  const elCardImage = document.getElementById(`${idCard}-image`)
  const elCardText = document.getElementById(`${idCard}-text`)

  elModalTitle.innerHTML = elCardTitle.innerText
  elModalText.innerHTML = elCardText.innerText
  elModalImage.src = elCardImage.src
}

function clickCard01 () {
  const elCard01Title = document.getElementById('card-01-title')
  const elCard01Image = document.getElementById('card-01-image')
  const elCard01Text = document.getElementById('card-01-text')

  elModalTitle.innerHTML = elCard01Title.innerText
  elModalText.innerHTML = elCard01Text.innerText
  elModalImage.src = elCard01Image.src
}

function clickCard02 () {
  const elCard02Title = document.getElementById('card-02-title')
  const elCard02Image = document.getElementById('card-02-image')
  const elCard02Text = document.getElementById('card-02-text')

  elModalTitle.innerHTML = elCard02Title.innerText
  elModalText.innerHTML = elCard02Text.innerText
  elModalImage.src = elCard02Image.src
}

function clickCard03 () {
  const elCard03Title = document.getElementById('card-03-title')
  const elCard03Image = document.getElementById('card-03-image')
  const elCard03Text = document.getElementById('card-03-text')

  elModalTitle.innerHTML = elCard03Title.innerText
  elModalText.innerHTML = elCard03Text.innerText
  elModalImage.src = elCard03Image.src
}

function clickCard04 () {
  const elCard04Title = document.getElementById('card-04-title')
  const elCard04Image = document.getElementById('card-04-image')
  const elCard04Text = document.getElementById('card-04-text')

  elModalTitle.innerHTML = elCard04Title.innerText
  elModalText.innerHTML = elCard04Text.innerText
  elModalImage.src = elCard04Image.src
}