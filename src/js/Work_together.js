const BASE_URL = "https://portfolio-js.b.goit.study/api";
const REQUEST_URL = "https://portfolio-js.b.goit.study/api/requests";
const form = document.querySelector('.form-subscribe');
const modal = document.querySelector('.model_overlay');
const modalInfo = document.querySelector('.info_item');

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
.then(data => console.log(data))
.then(log => modalInfo.insertAdjacentHTML("beforeend", createMarkup(log)))
.catch(error => console.log(error.message))
} 

function createMarkup(arr) {
    modal.classList.remove("visibility-hidden");
    return arr.map(({ title, message }) => `
        <div class="text_info">
        <p>${title}</p>
        </div>
        <div class="supporting_text">
        <p>${message}</p>
        </div>
    `).join("");
}
function array(data) {
    Object.keys(data)
}