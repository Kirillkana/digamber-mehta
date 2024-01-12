window.onload = function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const hamburger = document.querySelector("#hamburger-btn");
    const platformText = document.querySelector(".platform-text"); // Targeting the Platform text
    const iconElement = document.querySelector(".heading-link .link_name i"); // Targeting the icon element
  
    // Function to change the menu button icon based on sidebar state
    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.add("bx-menu-alt-right");
        iconElement.className = "";
        // Reset the icon to blank when sidebar is open
        platformText.textContent = "Platform"; // Set text to "Platform" when sidebar is open
      } else {
        closeBtn.classList.remove("bx-menu-alt-right");
        iconElement.className = "bx bx-minus"; // Set the icon to bx-minus when sidebar is closed
        platformText.textContent = ""; // Remove text when sidebar is closed
      }
    }
  
    // Set the initial icon based on the sidebar state on page load
    menuBtnChange();
  
    closeBtn.addEventListener("click", function() {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });
  
    // hamburger.addEventListener("click", function() {
    //   sidebar.classList.toggle("open");
    //   menuBtnChange();
    // });
  
    // Media query event handler to add or remove the sidebar
    // function handleWindowSizeChange() {
    //   if (window.innerWidth <= 600) {
    //     if (sidebar.classList.contains("open")) {
    //       sidebar.classList.remove("open"); // Close sidebar on small screens
    //     }
    //   }
    // }
  
    function toggleSidebar() {
      sidebar.classList.toggle("open");
      menuBtnChange();
    }
  
    // Event listener for the hamburger icon
    hamburger.addEventListener("click", toggleSidebar);
  
    // Check window size on load and resize
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
  };
  