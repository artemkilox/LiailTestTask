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
let htmlLoaded = false
const setHtmlList = () => {
    data.services.sort((a, b) => parseFloat(a.sorthead) - parseFloat(b.sorthead));
    let html = ''
    const setItems = (head) => {
        data.services.map( item => {
            if(item.head === head){
                if(item.node === 1){
                    html += '<label class="container">' +
                        '<input id="item' + item.id + '" class="checkbox" type="checkbox"/>' +
                        '<span class="container-label">'
                        + item.name
                        + '</span>' +
                        '<div id="container' + item.id + '" class="container-items closed">'
                    return setItems(item.id)
                } else if(item.node === 0){
                    return html += "<div class='item'>" + item.name + ' (' + item.price + '₽)' + '</div>'
                }
            }
        })
        html += '</div></label>'
    }
    setItems(null)
    wrapper.innerHTML = html
    htmlLoaded = true
}
const setListeners = () => {
    let headers = []
    data.services.map(item => {
        if(headers.indexOf(item.head) === -1){
            headers.push(item.head)
        }
    })
    headers.shift()
    headers.map(header => {
        let checkbox = document.getElementById('item' + header)
        let container = document.getElementById('container' + header)
        checkbox.addEventListener('change', () => {
            if(checkbox.checked === true){
                container.classList.remove('closed')
            } else if(checkbox.checked === false){
                container.classList.add('closed')
            }
        })
    })
}
setHtmlList()
if(htmlLoaded)
    setListeners()