import { cats, image, statement } from "./tabOne.js";
import {menus,} from "./tabTwo.js";
import {contactPage} from "./tabThree.js"
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const homeClick = function() {
    document.getElementById("content").innerHTML = '';
    cats();
    image();
    statement();
}

const menuClick = function() { 
    document.getElementById("content").innerHTML = '';
    menus();
};

const contactClick = function() {
    document.getElementById("content").innerHTML = '';
    contactPage();
}

home.addEventListener('click', homeClick);
menu.addEventListener('click', menuClick);
contact.addEventListener('click', contactClick);
export {homeClick, menuClick, contactClick};