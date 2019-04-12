const url = 'https://api.coincap.io/v2'

function getAssets () {
  return fetch(`${url}/assets`)
    .then(res => res.json())
}

function getRate (coin) {
  return fetch(`${url}/rates/${coin}`)
    .then(res => res.json())
}

function getAsset (coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
}

export default { getAssets, getRate, getAsset }
