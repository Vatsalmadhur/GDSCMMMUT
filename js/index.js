
function navbarToggle() {
  console.log("clicked");

  var element1 = document.getElementById("navBox");
  element1.classList.toggle("navBox1");

  var element2 = document.getElementById("mid");
  element2.classList.toggle("mid1");

  var element3 = document.getElementById("super");
  element3.classList.toggle("super1");

}


var ele = document.getElementById("animation");
ele.style.position = "absolute";
ele.style.top = "10%";
ele.style.right = "-3%";






//dark mode toggle
const body = document.body
const hs2 = document.getElementById('h-s-2');
const main3 = document.getElementById('main3');
const main4 = document.getElementById('main4');

const navBox = document.getElementById('navBox');
const navTxt = document.querySelectorAll('#navText');
const hamLine = document.querySelectorAll('#hamLine');





const out_hs3 = document.getElementById('out-h-s-3');
const head_hs3 = document.getElementById('head-h-s-3');
const hs3 = document.getElementById('h-s-3');
const hs3_txt = document.getElementById('h-s-3-txt');


const hs4 = document.getElementById('h-s-4');
const hoe = document.getElementById('headingOfEvents');
const out_hs5 = document.getElementById('h-s-5');
const hs5 = document.getElementById('Teams');




const toggle = document.getElementById('toggle');
var link = document.getElementById("lnk");
toggle.onclick=function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active')

    hoe.classList.toggle('active')

    navBox.classList.toggle('active')
    navTxt.forEach(element =>{element.classList.toggle('active')}) 
    hamLine.forEach(element =>{element.classList.toggle('active')})   


    hs2.classList.toggle('active')
    main3.classList.toggle('active')
    main4.classList.toggle('active')

    out_hs3.classList.toggle('active')
    head_hs3.classList.toggle('active')
    hs3.classList.toggle('active')
    hs3_txt.classList.toggle('active')


    hs4.classList.toggle('active')

    out_hs5.classList.toggle('active')
    hs5.classList.toggle('active')



}

 


