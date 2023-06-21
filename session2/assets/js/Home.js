let template = document.createElement("template")
template.innerHTML = `
<style>
    .box {
        width:100%;
        height:600px;
        background:red;
        margin:10px;
    }
</style>

<div class='box'></div>
`

export default class Home extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}


customElements.define("home-component",Home)