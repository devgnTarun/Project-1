let myNav = document.querySelector('.nav-ui')
let navBar = document.querySelector('.head-nav')
let logBox = document.getElementById('logBox')
let regBox = document.getElementById('regBox')
let alertBox = document.getElementById('alert')


function showMenu() {
  myNav.style.right = "0"; 
}
function hideMenu() {
    myNav.style.right = "-200px";
}

// const nav = document.querySelector('#nav');
let navTop = navBar.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    navBar.classList.add('fixed');
  } else {
    navBar.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);





// Vanilla Javascript
var input = document.querySelector("#phone");
window.intlTelInput(input,({
      // options here
}));




// Login box show and hide



function showLog()  {
  logBox.style.display = 'block';
  regBox.style.display = 'none';
}


function hideLog()  {
  logBox.style.display = 'none';
}

function hidereg() {
  regBox.style.display ='none';}


function create() {
  regBox.style.display = 'block';
  logBox.style.display = 'none';
  alertBox.style.display = ' block';
  setInterval(() => {
    alertBox.style.display = ' none';
  }, 2000);
}


function alreadyAc() {
  regBox.style.display = 'none';
  logBox.style.display = 'block';
}

