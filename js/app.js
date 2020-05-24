//Build the menu dynamically

let listmenuItem = document.getElementById("navbar-list");
let sectionCount = document.getElementsByClassName("landing__container").length;

for (i = 1; i < sectionCount + 1; i++) {
  let menuItem = "#section" + i + "-title";
  let menuItemValue = document.querySelector(menuItem);
  let menuItemText = menuItemValue.textContent;
  let newLine = document.createElement("li");
  let lineText = document.createTextNode(menuItemText);
  let listContent = "sample-nav-" + i;
  newLine.setAttribute("id", listContent);
  newLine.setAttribute("class", "nav-list-part");
  newLine.appendChild(lineText);
  listmenuItem.appendChild(newLine);

  let menuItemTarget = document.getElementById("section" + i);
  let listTarget = document.getElementById(listContent);
  let buttonName = "section" + i + "-button";
  let buttonToAdd = document.getElementById(buttonName);

  listTarget.addEventListener("click", function () {
    menuItemTarget.scrollIntoView({
      behavior: "smooth"
    });
    buttonToAdd.innerHTML =
      "<button class='section-button' onclick='scrollingToTop()'>Back to Top</button>";
  });
}
//Back to top button
const scrollToTop = () => {
  const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolling > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrolling - scrolling / 50);
  }
};


// On button click, goes to top of page 
function scrollingToTop() {
  scrollToTop();

  for (i = 1; i < sectionCount + 1; i++) {
    let buttonScroll = document.getElementById("section" + i + "-button");
    buttonScroll.innerHTML = "";
  }
}
//Checks if section is in view and adds active-class
function viewingSection() {
  let partSectionview = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < sectionCount + 1; i++) {
    let wholeSection = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function (event) {
        if (partSectionview(wholeSection)) {
          wholeSection.classList.add("your-active-class");
        } else {
          wholeSection.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("headers");

// Get the offset position of the navbar
var sticky = headers.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
viewingSection();
