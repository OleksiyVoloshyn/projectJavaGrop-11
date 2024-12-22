import axios from 'axios';
import '../css/styles.css';



const BASE_URL = "https://portfolio-js.b.goit.study/api-docs/#/Requests/post_requests";
const form = document.querySelector('.form-subscribe');
const buttonSend = document.querySelector('.footer-button-form');

form.addEventListener("submit", getInfo);
function getInfo(event) {
    event.preventDefault();
    const { email, comment } = event.target.elements;
    console.log(email.value, comment.value);
}
