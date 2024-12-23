const BASE_URL = "https://portfolio-js.b.goit.study/api";
const REQUEST_URL = "https://portfolio-js.b.goit.study/api/requests";
const form = document.querySelector('.form-subscribe');

function fetchData(url = BASE_URL, options = {}) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
    })
}
form.addEventListener("submit", getClick);
function getClick(event) {
    event.preventDefault()
    const mail = event.target.elements.email.value;
    const comments = event.target.elements.comment.value;
    fetch(REQUEST_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: mail,  comment: comments}),
    
})
.then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
    })
.then(log => console.log(log.title, log.message))
.catch(error => console.log(error.message))
} 



