const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
 
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then ((response) => {
            
        response.json().then ((data) => {

    if (data.error) {
        messageOne.textContent = (data.error)
    } else {    
        messageOne.textContent = (data.location)
        messageTwo.textContent = (data.forecast)
            }
        })
    })
})

document.querySelector('#current-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude, longitude)

        fetch('/forecast?latitude='+ latitude + '&longitude=' + longitude).then ((response) => {

        response.json().then ((data) => {
    
        if (data.error) {
            messageOne.textContent = (data.error)
        } else {    
            //messageOne.textContent = (data.location)
            messageTwo.textContent = (data.forecast)
                }
            })
        })
    })

    

})
