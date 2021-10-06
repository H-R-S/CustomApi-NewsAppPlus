var email = document.getElementById('email');
var password = document.getElementById('password')

function signIn() {

    // axios.post('localhost:5000/auth/signin', {
    //     email: email.value,
    //     password: password.value
    // })

    var obj = {
        method: 'POST',
        headers: {'Access-Control-Allow-Origin': '*', 
                  'Content-Type':'application/json',},
        data: {email: email.value, password: password.value},
        url: 'http://localhost:5000/auth/signin'
    }

    axios(obj)

    .then((success) => {
        console.log(success, 'success')
    })
    .catch((err) => {
        console.log(err, 'error')
    })
}