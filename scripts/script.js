async function tableList(event) {
    event.preventDefault()

    const tableData = await fetch('/api/tables').then(r => r.json())
    const tableRow = tableData[0]
    document.querySelector('#tableList').innerHTML = `Table name: <b>${tableRow.name}</b>, phone: ${tableRow.phone}`
}

// == RESERVE STARTER SCRIPT CODE ==
// this is a function to wrap the POST operation (used in reserve.html only)
// note you must AWAIT this response.
// alternatively use jQuery $.post()
function formPost(url, data = {}) {
    // post requires header, method + data to be sent
    const postData = {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(data)
    }
    return fetch(url, postData).then(res => res.json())
}
async function tableReserve(event) {
    event.preventDefault()

    const tableData = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phoneNumber: document.querySelector('#phoneNumber').value
    }

    const result = await formPost('/api/tables/reserve', tableData)
    document.querySelector('#tableMessage').innerText = result.message
}

document.querySelector("#confirm").addEventListener("click", function(event) {
    tableReserve(event)
})
