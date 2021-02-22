// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
//
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
//
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
//
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




//Event Listening


// document.querySelector('.clear-tasks').addEventListener('click', function(){
//     console.log('Hello EventListener');
// });



// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello EventListener');
//     e.preventDefault()});



// document.querySelector('.clear-tasks').addEventListener('click', onClick);
//
//     function onClick(e){
//         // console.log('onClick function');
//         let val;
//         val = e;
//          // event Target element
//         // val = e.target;
//         // // val = e.target.id;
//         // val = e.target.className;
//         // val = e.target.classList;
//         // val = e.target.innerText='Hello';
//
// //event Type
//     val = e.type;//---> click
//
//
//         console.log(val);
// };

// document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
// function onClick(e) {
//     let val;
//     val = e;
//     // val =e.type;
//     // val = e.target.innerText="mouse over";
//     // val =e.timeStamp;
//     // //Coords event relative to window
//     // val= e.clientX;
//     // val= e.clientY;
//
//     //Coords event relative to the element
//     // val= e.offsetX;
//     // val= e.offsetY;
//
//
//
//     console.log(val);
// }
// const clearBtn =document.querySelector('.clear-tasks');
// const card =document.querySelector('.card');
// const heading=document.querySelector('h5');
// //Click
// // clearBtn.addEventListener('click',runEvent);
// //DoubleClick
// // clearBtn.addEventListener('dblclick',runEvent);
// //mouseup/mousedown
// // clearBtn.addEventListener('mouseup',runEvent);
// // clearBtn.addEventListener('mousedown',runEvent);
// //mouseenter
// // card.addEventListener('mouseenter',runEvent);
// //mouseleave
// // card.addEventListener('mouseleave',runEvent);
// //mouseout
// // card.addEventListener('mouseout',runEvent);
// //mousemove
// card.addEventListener('mousemove',runEvent);
//
//
//
// //event handling
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//
//     heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.backgroundColor=` rgb(${e.offsetX},${e.offsetY},40)`;
// }







////////////////////////////////   ARRAYS            /////////////////////////////////

// const numbers1 =[104,22,243,94,15];
// const numbers2=new Array(6,7,8,9);
// const fruits =['apple','banana','pear','peach'];
// const mix =[12,'string',true,undefined, null,{a:1,b:2}, new Date()];
// let val;

//get array length
// val=numbers1.length;

 //check if array
// val=Array.isArray(numbers1);//-->true
// val=Array.isArray("hello"); //-->false

//get single value from array
// val= numbers1[2];

// //Insert into array
// numbers1[2]=100;
//
// //find index oof a value
// val=numbers1.indexOf(5);
//
// //mutating arrays
// //add to the end
// numbers1.push(936);
// //add to the front
// numbers1.unshift(1.3);
//
// //take off from end
// numbers1.pop();
//
// //take off from front
// numbers1.shift();
//
// //splice values
// numbers1.splice(1,3);
//
// numbers1.splice(1,1);
// numbers1.splice(0,1);

//reverse
// numbers1.reverse();
//Concat arrays
// val=numbers1.concat(numbers2);
//Sorting arrays
// val=numbers1.sort();//-->104 will be the first value in array that's why we need a compare function
// val=numbers2.sort();


// //compare function
// val=numbers1.sort(function(x,y){
//     return x-y;
// });
//reverse sorting
// val=numbers1.sort(function(x,y){
//     return y-x;
// });


// //find
// function under30(num){
//     return num<30;
// }
// val=numbers1.find(under30); //-->returns the first value under 30
//


// console.log(numbers1);
// console.log(val);


///////////////////////          LOOPS          ////////////////////////////////////////////////////

// //for loop (when you now the number of iterations

// for(let i = 0; i <10 ; i++)
// {
//
//     if(i==2){
//      console.log('2 is my fav');
//      continue;
//     }
//     if(i==5){
//         console.log('stop the loop');
//         break;
//     }
//
//     console.log(i);
// }


// //while loop when we don't know the number of iterations
//
// let i=0;
// while(i<=10){
//     console.log('Number'+i);
//     i++;
// }


// // do while  ( will run once whatever )
// let i=20;
// do {
//     console.log('number' +i);
//     i++;
// }
// while(i<10);
//

/////////////iterating over arrays/////////////////

// const cars=['ford','peugeot','renault','fiat','honda'];

// for(let i=0;i< cars.length;i++){
//     if(cars[i]=="fiat"){
//         console.log("Fiat is my current car");
//         continue;
//     }
//     if(i==cars.length-1){
//         console.log("stop loop");
//         break;
//     }
//
//     console.log(cars[i]);
// }

// // forEach
// cars.forEach(function(car,index,array){
//     // if(car=="fiat"){
//     //     console.log('my fav car');
//     // }
//     console.log(car);
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// //map
// const users =[
//     {id: 1,name:'John'},
//     {id: 2, name:'sara'},
//     {id: 3, name:'wiwi'},
//     {id: 4, name:'lolo'}
// ];
//
// const ids =users.map(function(user,index){
//     return user.id;
//     console.log(`${index} : ${user}`);
// });
//
// const names =users.map(function(user,index){
//     return user.name;
//     console.log(`${index} : ${user}`);
// });
//
// names[1]='hello';
// ids[1]=66;
//
// console.log(ids);
// console.log(names);



// //for in
//
// const user={
//     firstName:'Wiwi',
//     lastName:'lolo',
//     age:2222
// }
// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

































