// Add your code here

let name = "Steve";
let email = "steve@steve.com";

function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        return document.body.innerHTML = data.id;
    })
    .catch(function(error) {
        return document.body.innerHTML = error.message;
    })

}

