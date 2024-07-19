document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#collapseOne");

    // Function to handle screen width changes
    function handleScreenWidth() {
      if (window.innerWidth <= 1500) {
        menu.classList.remove("show");
      }else{
        menu.classList.add('show');
      }
    }
    handleScreenWidth();
    window.addEventListener("resize", function () {
      handleScreenWidth();
    });
  });