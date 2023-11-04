console.log('main.js')

const promise = fetch('../jsons/test.json')
console.log(promise)

const resObj = promise.then((res) => {
    const data = res.json()
    console.log(data)
    return data
}) 

console.log(resObj)
resObj.then((obj) => {
    console.log(obj.miso)
})