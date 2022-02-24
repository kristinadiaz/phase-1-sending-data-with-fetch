function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    })
    .then(res => res.json())
    .then(user => appendId(user))
    .catch(error => errorMessage(error))
}

function appendId(user) {
    let p = document.createElement('p')
    p.textContent = user.id 
    document.querySelector('body').appendChild(p)
}

function errorMessage(error) {
    document.body.innerHTML = error.message
}