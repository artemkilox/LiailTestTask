const wrapper = document.getElementById('contentWrapper')
const data = {
    "services": [
        {"id": 1, "head": null, "name": "Проф.осмотр",                  "node": 0, "price": 100.0,  "sorthead": 20},
        {"id": 2, "head": null, "name": "Хирургия",                     "node": 1, "price": 0.0,    "sorthead": 10},
        {"id": 3, "head": 2,    "name": "Удаление зубов",               "node": 1, "price": 0.0,    "sorthead": 10},
        {"id": 4, "head": 3,    "name": "Удаление зуба",                "node": 0, "price": 800.0,  "sorthead": 10},
        {"id": 5, "head": 3,    "name": "Удаление 8ого зуба",           "node": 0, "price": 1000.0, "sorthead": 30},
        {"id": 6, "head": 3,    "name": "Удаление осколка зуба",        "node": 0, "price": 2000.0, "sorthead": 20},
        {"id": 7, "head": 2,    "name": "Хирургические вмешательство",  "node": 0, "price": 200.0,  "sorthead": 10},
        {"id": 8, "head": 2,    "name": "Имплантация зубов",            "node": 1, "price": 0.0,    "sorthead": 20},
        {"id": 9, "head": 8,    "name": "Коронка",                      "node": 0, "price": 3000.0, "sorthead": 10},
        {"id": 10, "head": 8,   "name": "Слепок челюсти",               "node": 0, "price": 500.0,  "sorthead": 20}
    ]
}
// let arr = []
// arr.push([])
// arr.push([])
// arr[0].push(1)
// arr[0].push(2)
// arr[1].push(3)
// arr[1].push(4)
// console.log(arr)
let headsArr = []
data.services.map( item => {
    if(headsArr.indexOf(item.head) === -1){
        headsArr.push(item.head)
    }
})
console.log(headsArr)
let htmlArr = []
headsArr.map(item => {
    htmlArr.push([])
})
// console.log(htmlArr)
data.services.map( item => {
    htmlArr[headsArr.indexOf(item.head)].push(item.id)
})
// console.log(htmlArr)
let finalArr = []
for(let i = 0 ; i < headsArr.length; i++){
    finalArr.push([])
    finalArr[i].push(headsArr[i], htmlArr[i])
}
// console.log(finalArr)
let html = ''
const setItems = (arr, item) => {
    console.log(item)
    if(headsArr.indexOf(item.id) !== -1){
        console.log(arr.filter(subItem => subItem.id !== item.id))
        // setItems(arr.filter(subItem => subItem.id !== item.id), item)
    } else if(headsArr.indexOf(item.id) === -1){
        return item.name
    }
}
data.services.map( item => {
    html += setItems(data.services, item)
})
// console.log(html)
// data.services.map( item => {
//     if(headsArr.indexOf(item.id) !== -1){
//         if(item.head === null){
//
//         }
//     }
//     data.services.map(subItem => {
//         if(subItem.head === item.id){
//
//         }
//     })
// })








