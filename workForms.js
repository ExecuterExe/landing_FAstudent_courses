const scriptURL = 'https://script.google.com/macros/s/AKfycbzHaZT6K5fjnNHqEIwt0bpzFEx2wgOl042WbLfs84QNiIQB3F0znt5FC7mcE3vfU9p6/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})