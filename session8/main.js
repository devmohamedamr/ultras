// document.write("<table border='1' width='200px' height='200px'> ");
// for(var row=1;row<=8;row++){
//     document.write("<tr>");
//     for(var column=1;column<=8;column++){
//       if( (column + row)%2){
//         document.write("<td bgcolor='white'></td>");
//       }else{
//         document.write("<td bgcolor='black'></td>");
//       }
//     }
//     document.write("</tr>");
// }
// document.write("</table>");




// window.onscroll = function(){
//   // document.body.scrollTop
//   // console.log(window.pageYOffset);
//   var nav = document.getElementById("nav");
//   if(window.pageYOffset > 200){
//       nav.classList.remove("nav");
//       nav.classList.add("navafter");
//   }else{
//     nav.classList.remove("navafter");
//     nav.classList.add("nav");
//   }
//   // console.log(document.getElementById("nav").scrollTop);
// }


// window.onscroll = function(){
//     if(window.pageYOffset > 2000){
//       // document.getElementById("gototop").style.cssText = "width: 50px;height: 50px;border-radius: 50%;background-color: black;position: fixed; right: 5px;bottom: 10px;transition: all 1s;opacity: 1;";
//       document.getElementById("gototop").classList.add("op1");
//       document.getElementById("gototop").classList.remove("op0");

//     }else{
//       // document.getElementById("gototop").style.cssText = "width: 50px;height: 50px;border-radius: 50%;background-color: black;position: fixed; right: 5px;bottom: 10px;transition: all 1s;opacity: 0;";
//       document.getElementById("gototop").classList.add("op0");
//       document.getElementById("gototop").classList.remove("op1");
//     }
// }


// var marked = 0;
var list_of_tasks = [];

function add() {
    var task = document.getElementById("task").value;
    var newtask =  task.trim();
    if(newtask != ''){
      list_of_tasks.push(task);
    }else{
      alert("string is empty");
    }
    document.getElementById("task").value = '';
    read();
}


function read() {
  var size = list_of_tasks.length;
  var list = '';
  for(var i =0;i<size;i++){
    list += "<li  onclick='cancel("+ i +")'>"+ list_of_tasks[i] + "</li> <button onclick='update("+ i +")'>update</button>";
  }
  document.getElementById("tasks").innerHTML = list;
   
}

var canceled = [];

function cancel(index){
    // marked++;
    console.log(canceled);

    if(canceled.includes(index)){
      // canceled.pop(index);
      canceled.splice(index,1);
    }else{
      canceled.push(index);
    }

    // console.log(canceled);
    // list_of_tasks
    var size = list_of_tasks.length;
    var list = '';
    for(var i =0;i<size;i++){
      if(canceled.includes(i)){
        list += "<li ondblclick='remove("+ i +")' style='text-decoration:line-through' onclick='cancel("+ i +")'>"+ list_of_tasks[i] + "</li>";
      }else{
        list += "<li  onclick='cancel("+ i +")'>"+ list_of_tasks[i] + "</li>";
      }
    }
    document.getElementById("tasks").innerHTML = list;
}

function remove(index) {
  //  alert(index);
  list_of_tasks.splice(index,1);

}

function update(index) {
  var inpt = document.getElementById("btn");
    document.getElementById("task").value = list_of_tasks[index];
    inpt.style = 'display:none';
    document.getElementById("btnupdate").style = "display:inline";
    document.getElementById("index").value = index;
  }

function edit(){
  // list_of_tasks[index] = 
  var taskid =  document.getElementById("index").value;
  list_of_tasks[taskid] = document.getElementById("task").value;
  console.log(list_of_tasks);
  document.getElementById("btn").style = "display:inline";
  document.getElementById("btnupdate").style = "display:none";
  document.getElementById("task").value = '';

  read();
}

