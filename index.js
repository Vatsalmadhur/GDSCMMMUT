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


  // window.addEventListener("DOMContent")

  var sky = document.getElementById('sky');
  var hills = document.getElementById('hills');
  var moon = document.getElementById('moon');
  var mainBox = document.getElementById('main1');
  //lower section
  var lowerBox1 = document.getElementById('main3');
  var lowerBox2 = document.getElementById('main4');

  window.addEventListener('scroll',function(){
    var valueX= this.window.scrollX;
    var valueY= this.window.scrollY;
    // setTranslate(0,valueY*0.2*0.2,sky);
    // setTranslate(0,valueY*0.2,hills);
    // setTranslate(10,valueY*0.4,moon);


    
    // console.log(valueX,valueY);
    sky.style.top = valueY* 0.45 +'px';
    hills.style.top = valueY* 0.2 +'px';
    moon.style.left = valueY* 0.15 +'px';
    // mainBox.style.top = valueY* 0.4 +'px';
    lowerBox1.style.left=valueY*0.9 + 'px';
    lowerBox2.style.right=valueY*0.9 + 'px';
    
    
    if(window.matchMedia('max-width:830px')){
    //   lowerBox1.style.left=valueY*0.4 + 'px';
    // lowerBox2.style.right=valueY*0.4 + 'px';
      // console.log('got it')
    }
    else if(window.matchMedia('max-width:830px')){
      
    //   lowerBox1.style.left=valueY*0.8 + 'px';
    // lowerBox2.style.right=valueY*0.8 + 'px';

    }



  })

  // function setTranslate(x,y,ele){
  //   ele.style.transform = "translate3D("+ x +","+ y +"px,0";
  // }


 
  




