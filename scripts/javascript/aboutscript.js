function toggleSee() {
    let box = document.getElementById('userbox');
    let box2 = document.getElementById('above'); 
    let box3 = document.getElementById('button1'); 
    let box4 = document.getElementById('image1');
    let box5 = document.getElementById('abouttitle')

    box.classList.toggle("hidden");
    box2.innerHTML = "";
    box3.classList.toggle("hidden");
    box4.classList.toggle("hidden");
    document.getElementById("button1").value="";
    box5.innerHTML = "";

}

function toggleHide() {
    let box = document.getElementById('userbox');
    let box2 = document.getElementById('above');  
    let box3 = document.getElementById('button1'); 
    let box4 = document.getElementById('image1');
    let box5 = document.getElementById('abouttitle')
    
    box.classList.toggle("hidden");
    box2.innerHTML = "Three great men worked together and made a mediocre website. We have a very particular set of skills - coding might be one of them ";
    box3.classList.toggle("hidden");
    box4.classList.toggle("hidden");
    document.getElementById("button1").value="View Creators";
    box5.innerHTML = " -- About -- "
}

// Thank you for working on it!


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function setting() { 
  console.log("working"); 
  const modal = document.querySelector(".settingBox"); 
  modal.classList.toggle("hidden");
  document.querySelector(".mainBody").classList.toggle(".blur"); 
}

function invert() { 
  console.log("working2");
  document.querySelector("body").classList.toggle("invert");
  
}

function talk() { 
  let question = prompt("How are You Doing Today?"); 
  alert("Oh yeah, well my day WAS THE WORST ");
  const all = document.querySelector("*"); 
  all.classList.add("hidden");
}

function talkRate() { 
  prompt("Enter Your Rating ... ");
  alert("10 stars. Thank you so much");
}