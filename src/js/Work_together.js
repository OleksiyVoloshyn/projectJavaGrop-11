import axios from 'axios';
import '../css/styles.css';



const BASE_URL = "https://portfolio-js.b.goit.study/api";
const REQUEST_URL = ""
const form = document.querySelector('.form-subscribe');
const buttonSend = document.querySelector('.footer-button-form');

function fetchData(url = BASE_URL, options = {}) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
    })
}
buttonSend.addEventListener('click', getClick);

function getClick(event) {
    const { email, comment } = event.target.elements;
    fetchData(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email.value, comment: comment.value })
    })
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
} 

