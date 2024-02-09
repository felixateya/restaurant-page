import renderHome from "./home"
import renderAboutPage from "./about"
import renderMenuPage from "./menu"

// CSS
import './styles.css'
let content = document.getElementById("content")

const home = document.getElementById("home")
const menu = document.getElementById("menu")
const about = document.getElementById("about")

content.innerHTML = renderHome()
home.onclick = () => {
    content.innerHTML = renderHome()
    home.classList.add("active")
    about.classList.remove("active")
    menu.classList.remove("active")
}

about.onclick = () => {
    content.innerHTML = renderAboutPage()
    about.classList.add("active")
    home.classList.remove("active")
    menu.classList.remove("active")
}
menu.onclick = () => {
    content.innerHTML = renderMenuPage()
    menu.classList.add("active")
    home.classList.remove("active")
    about.classList.remove("active")
}
