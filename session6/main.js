// var Username = 'mohamed';
// var uSername = 'eslam';
// var usErname = 'ahmed';


// alert(username);

// console.log(username);

// document.write(username);

// console.log(console);



// console.log(10 < 20);


// if(10 < 20){
//     console.log("ahmed");
// }else if(10 < 30){
//     console.log("mohamed");
// }else{
//     console.log("error");
// }

// var x =true;
// console.log(typeof(x));

// switch(x){
//     case 'ahm ed':
//         console.log("ahmed");
//     break;
//     case 'mohamed':
//         console.log("mohamed");
//     break;
//     default:
//         console.log("errro");
// }



// var i = 0;

// do{
//     console.log("test");
//     i++;
// }while(i>10);


// for(var i = 1;i<15;i++){

//     if(i == 5){
//         document.write("mohamed <br>");
//         continue;
//     }
//         document.write(i + "<br>");
//     // }
// }




// for(var i =0;i<5;i++){
//     for(var x =0; x < i;x++){
//         document.write("*"); 
//     }
//    document.write("*"+'<br>'); 
// }



// var items = ['ahmed','mohamed','eslam'];

// var count = items.length;

// for(var i=0;i<count;i++){
//     console.log(items[i]);
// }
// console.log(typeof(items));



// var item = [];

// var list = { name : 'mohamed' , age : 22 };
// console.log(list);

// var dom = {
//     'name' : 'ahmed',
//     'welcome' : ['eslam','amr']
// };
// var list = [
//     {'name' : 'mohamed'},
//     {'name' : 'mohamed'}
// ];

// console.log(dom);






// var items = ['ahmed','mohamed','eslam'];

// var count = items.length;

// for(var i=0;i<count;i++){
//     console.log(items[i]);
// }


// var items2 = ['asdasd','fgfg','eslam'];

// var count = items2.length;

// for(var i=0;i<count;i++){
//     console.log(items2[i]);
// }



// function welcome(){
//     console.log("welcom");
// }


// var welcome = function (){
//     console.log("welcom");
// }


// welcome();








// function num(x){
    
//     console.log(x);
//     return x;
// }


// console.log(num(10) + 10);


// document.getElementById("number").innerHTML = "<h1>mohamed</h1>";
// document.getElementById("number").style.backgroundColor = "red";


// function changecolor(color){
//     // alert(color);
//     document.body.style.background = color;
// }



// function show(){
//     var style =  getComputedStyle(document.getElementById("box"));
//     console.log(style.left);
//     if(style.left == '-190px'){
//         document.getElementById("box").style.cssText  = 'left:0px;transition:1s all';
//     }else{
//         document.getElementById("box").style.cssText  = 'left:-190px;transition:1s all';
//     }
// }



function showPassword(){
  var input =  document.getElementById("password").type;
  if(input == 'password'){
    document.getElementById("password").type = 'text';
    document.getElementById("show").innerText = "hide";
  }else{
    document.getElementById("password").type = 'password';
    document.getElementById("show").innerText = "show";

  }
  
    console.log(input);
}


















function clc(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var o = document.getElementById("o").value;
    var x = parseInt(x);
    var y = parseInt(y);
    var res;
    if(o == "+"){
      res =  x + y;
    }else if(o == "-"){
        res =  x - y;
    }
    else if(o == "*"){
        res =  x * y;
    }else if(o == "/"){
        res =  x / y;
    }
    document.getElementById("res").innerText = res;
}







