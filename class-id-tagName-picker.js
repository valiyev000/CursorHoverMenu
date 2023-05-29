


// TODO|| READY-TO-USE EXTENSION
// TODO|| INSTALL TO CHROME>SOURCES>SCIPPETS












const styletag = document.createElement("style")
document.head.appendChild(styletag)
styletag.innerHTML = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}
#sec-picker{
    width: max-content;
    min-width: 150px;
    height: max-content;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    background: #ededed;
    position: absolute;
    opacity: 1;
    z-index: 100;
}
.picker-items{
    padding: 7px 0 7px 3px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
}
`

const pickerMenu = document.createElement("section")
pickerMenu.id = "sec-picker"

const firstElementBody = document.body.firstElementChild
document.body.insertBefore(pickerMenu, firstElementBody)

document.addEventListener("mousemove", (e) => {
    pickerMenu.style.top = `${e.pageY}px`
    pickerMenu.style.left = `${e.pageX}px`
    if (e.target.className === ""  && e.target.id === "" && e.target.tagName === "BODY") {
        pickerMenu.style.display = "none"
    } else {
        pickerMenu.style.display = "block"
        
    }
    pickerMenu.innerHTML = `
        <div class="picker-items">Class: ${(e.target.tagName !== "BODY") ? e.target.className : ""}</div>
        <div class="picker-items">ID: ${(e.target.tagName !== "BODY") ? e.target.id : ""}</div>
        <div class="picker-items">TagName: ${(e.target.tagName !== "BODY") ? e.target.tagName : ""}</div>
        
`

})
