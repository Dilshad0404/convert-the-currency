var button= document.querySelector("#btn");
  var input = document.querySelector("#input-area");
  var output = document.querySelector("#output")

  button.addEventListener('click', function converter(){

    output.innerHTML=input.value*82.63 + " INR "

  })


  var button2=document.querySelector("#btn2");
  var input2=document.querySelector("#input-area2");
  var output2=document.querySelector("#output2");

  button2.addEventListener('click', function converter(){

    output2.innerHTML=input2.value*99.87 + " INR "

  })


  var button3=document.querySelector("#btn3");
  var input3=document.querySelector("#input-area3");
  var output3=document.querySelector("#output3");

  button3.addEventListener('click', function converter(){

    output3.innerHTML=input3.value*20.02+ " INR "

  })



  var button4=document.querySelector("#btn4");
  var input4=document.querySelector("#input-area4");
  var output4=document.querySelector("#output4");

  button4.addEventListener('click', function converter(){

    output4.innerHTML=input4.value*3.16+ " PKR "

  })
