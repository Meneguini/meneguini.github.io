document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', scrollChanges);
});

const scrollChanges = () => {
    console.log("scroll changes");

    const itemOne = document.querySelector('#item-1') 
    console.log("scrolltop of itemOne", itemOne.scrollTop);
    if (itemOne.scrollTop == 0) {
        console.log("One at the top");
    }

    const itemTwo = document.querySelector('#item-2')
    if (itemTwo.scrollTop == 0) {
        console.log("two ate the top");
    }
    

}