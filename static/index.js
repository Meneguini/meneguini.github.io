document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#menu-icon').addEventListener('click', menuClicked);
});

const menuClicked = () => {
    console.log("menu cliked");
    if(document.querySelector(".nav-pills").style.display == 'block') {
        document.querySelector(".nav-pills").style.display = 'none';
    }
    else {
        document.querySelector(".nav-pills").style.display = 'block';   
    }
}