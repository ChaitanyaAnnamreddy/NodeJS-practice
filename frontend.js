const data = fetch('http://localhost:7777')
const dataJson = await data.json()
console.log(dataJson)
