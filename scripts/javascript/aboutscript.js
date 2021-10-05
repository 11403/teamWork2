function toggleSee() {
    let box = document.getElementById('userbox');
    let box2 = document.getElementById('above'); 
    let box3 = document.getElementById('button1'); 
    let box4 = document.getElementById('image1');

    box.classList.toggle("hidden");
    box2.innerHTML = "";
    box3.classList.toggle("hidden");
    box4.classList.toggle("hidden");
    document.getElementById("button1").value="";

}

function toggleHide() {
    let box = document.getElementById('userbox');
    let box2 = document.getElementById('above');  
    let box3 = document.getElementById('button1'); 
    let box4 = document.getElementById('image1');
    
    box.classList.toggle("hidden");
    box2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quod atque nihil saepe quibusdam deleniti iure facere consequatur doloribus fugiat vero, hic inventore deserunt ducimus minima nemo qui dicta officia!";
    box3.classList.toggle("hidden");
    box4.classList.toggle("hidden");
    document.getElementById("button1").value="View Creators";
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