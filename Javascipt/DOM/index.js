// const div=document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="Hello world";
// div[0].style.backgroundColor='cyan';
// console.log(div);
// // const container=document.getElementsByClassName('container');
// // container[0].innerHTML='<h2 style=color:red>Hello world</h2>';
// console.dir(container);
// const h2=document.createElement('h2');
// h2.innerText="abes engineering college";
// h2.style.color='green';
// h2.style.background="skyblue";
//  container[0].innerHTML
// console.log(h2);
// const container=document.getElementsByClassName('container');

 // container[0].innerHTML='<h2 style=color:red>Hello World</h2>';
 // console.log(container);


// const h2=document.createElement('h2');
// h2.innerText="ABES Engineering College";
// h2.style.color='green';
// h2.style.backgroundColor='skyblue'
// console.log(h2);
// container[0].appendChild(h2);
// const button=document.getElementById('btn');
//  console.log(button);
//  document.getElementById('out').innerHTML="<h2>loading img....</h2>"
//  function msg(){
//     document.getElementById('out').innerHTML="<h2>loading img....</h2>"
//     setTimeout(()=>{
//    const img=document.createElement('img');
// img.src="download.jpeg";
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// document.getElementById('out').innerHTML="<h2>welcome to abes ec</h2>"
// container[0].appendChild(img);
//  },2000);
 // const img=document.createElement('img');
 // img.src="download.jpeg";
// img.setAttribute('height','200px');
//  img.setAttribute('width','200px');
//  console.log(img);
// container[0].appendChild(img);




// // console.log(button);
// //   document.getElementById('out').innerHTML="<h2>loading img....</h2>"

// // // function msg(){
// //   const img=document.createElement('img');

// // //   console.log("Hi, I am working on DOM");
// // //   console.log("Welcome in abes engineering college");
// // // }
// // // button.addEventListener('click',msg);
  
// //  const button = document.getElementById('btn');
// //     const output = document.getElementById('out');

// //     function msg() {
        
// //      out.textContent = "Welcome to ABES";
// //     }
//  }
//     button.addEventListener('click', msg);

// console.log("start")
// setTimeout(()=>{
//    console.log("welcome")
// },20000)
// console.log('end');

// A greeting callback that expects a name (or message) and returns a composed string
// function greetmsg(name) {
//   return "Hello " + name + ", welcome to ABES";
// }

// // A handler that takes a “msg” (or name) and a callback, calls the callback with msg, returns the result
// function msgHandler(msg, callback) {
//   const data = callback(msg);
//   return data;
// }

 // Test / usage
 // const completemsg = msgHandler("Rahul", greetmsg);
// console.log(completemsg);  // → "Hello Rahul, welcome to ABES"

 // Iterating over a list of students and printing greeting for each
// const students = ["Rahul", "Aman", "Vansh"];
// students.forEach(name => {
//   const greeting = msgHandler(name, greetmsg);
//   console.log(greeting);
// });
const myPromise = new Promise((resolve, reject) => {
  const password = "789ghik";
  if (password.length > 8) {
    resolve("Password length is okay.");
  } else {
    reject("Password length does not meet our policy.");
  }
});

myPromise
  .then((result) => {
    console.log(result); // Logs: Password length is okay.
  })
  .catch((err) => {
    console.log(err); // Logs: Password length does not meet our policy.
  })
  .finally(() => {
    console.log("All resources have been closed successfully.");
  });

function handleData() {
  myPromise
    .then((result) => {
      console.log(result); // Logs: Password length is okay.
    })
    .catch((err) => {
      console.log(err); // Logs: Password length does not meet our policy.
    });
}

handleData();
