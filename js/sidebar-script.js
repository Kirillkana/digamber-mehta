// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

const body = document.querySelector("#bodyy");
const burgerMenu = document.querySelector(".burger-menu");

let clickedHandlerMenu = false;
let previousWidth = window.innerWidth;

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
    body.classList.add('wide');
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    body.classList.remove('wide');
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
  burgerMenu.classList.toggle("opened");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
function handleResize() {
   var currentWidth = window.innerWidth;

  if (window.innerWidth <= 991) {
    sidebar.classList.add("close");
    sidebar.classList.remove("hoverable");
    sidebar.classList.add("locked");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    body.classList.remove("wide");
    burgerMenu.classList.remove("opened");
    
    if (clickedHandlerMenu == false){
      clickedHandlerMenu = true
      burgerMenu.addEventListener('click', function () {
        sidebar.classList.toggle("close");
        burgerMenu.classList.toggle("opened");
      });
    }
    
    //tap on the sidebar area on mobile
    document.body.addEventListener('click', function (event) {
      if (!event.target.closest('.sidebar') && !event.target.closest('.burger-menu')) {
        if (!sidebar.classList.contains('close')){
          sidebar.classList.toggle("close");
          burgerMenu.classList.toggle("opened");
        }
      } 
    });
  }else{
     //ResizeDecrease
    if (currentWidth < previousWidth) {
    
    }
    //ResizeIncrease
    else if (currentWidth > previousWidth) { 
      if (sidebar.classList.contains('close')){
        sidebar.classList.remove("close");
        burgerMenu.classList.remove("opened");
      }
    }
    previousWidth = currentWidth;
  }
}

window.addEventListener('resize', handleResize);
handleResize();


// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
//sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);
