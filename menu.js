function openCloseMenu() {
    const menu = document.querySelector("#MobileMenu")
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}


document.querySelector("#openbtn").addEventListener("click", function (){
    openCloseMenu();
});

document.querySelector("#closebtn").addEventListener("click", function (){
    openCloseMenu();
})