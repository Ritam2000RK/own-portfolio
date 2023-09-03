const contact = document.getElementById("footer-content");
const button = document.getElementById("contact-button");

contact.style.display = 'none';

function showContent() {
    contact.style.display = 'block';
}

button.onclick = showContent;
