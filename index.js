function navbarToggle() {
    console.log("clicked");
  
    var element1 = document.getElementById("navBox");
    element1.classList.toggle("navBox1");
  
    var element2 = document.getElementById("mid");
    element2.classList.toggle("mid1");

    var element3=document.getElementById('super');
    element3.classList.toggle('super1');
  }
  
  
  var ele = document.getElementById('animation');
  ele.style.position='absolute'
  ele.style.top='10%'
  ele.style.right='-3%'



  //Parallax section begins here

  var sky = document.getElementById('sky');
  var hills = document.getElementById('hills');
  var moon = document.getElementById('moon');
  var mainBox = document.getElementById('main1');
  window.addEventListener('scroll',function(){
    var value= this.window.scrollY;
    console.log(value);
    sky.style.top = value* 0.4 +'px';
    hills.style.top = value* 0.5 +'px';
    moon.style.left = value* 0.6 +'px';
    // mainBox.style.top = value* 0.4 +'px';


  })
  




