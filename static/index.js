document.addEventListener("DOMContentLoaded", () => {
 
  const isMobile = () => {
    if (window.innerWidth <= 736) {
      console.log("hello mobile");

    }
  }

  isMobile();
  
  const menuClicked = () => {
    document.querySelector(".nav-pills").style.display == "block"
      ? (document.querySelector(".nav-pills").style.display = "none")
      : (document.querySelector(".nav-pills").style.display = "block");
  };

  
  document.querySelector("#menu-icon").addEventListener("click", menuClicked);

});


