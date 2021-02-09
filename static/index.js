document.addEventListener("DOMContentLoaded", () => {


  const closeNav = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight -3000) {
      
      document.querySelector(".nav-pills").style.display = "none";

      window.addEventListener("scroll", closeNav);
    }
  }

  const isMobile = () => {
    if (window.innerWidth <= 736) {
      console.log("mobile");
      window.addEventListener("scroll", closeNav);
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


