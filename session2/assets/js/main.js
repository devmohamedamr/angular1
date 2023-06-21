import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'


document.querySelector("#router").onclick = function(e){
    let router = document.querySelector("router")
    if(e.target.getAttribute("to") == "home"){
        router.innerHTML = "<home-component></home-component>"
    }else if (e.target.getAttribute("to") == "about"){
        router.innerHTML = "<about-component></about-component>"
    }else if (e.target.getAttribute("to") == "contact"){
        router.innerHTML = "<contact-component></contact-component>"
    }
}