// var makeCoffeMachine = {
//     makeCoffe : function(done)
//     {
//         console.log("Making coffer");
//         done();   //Khi ở đây gọi hàm thì tức là hiểu done chính là 1 callback(function truyền vào , khi truyền kiểu numnber hay bool sẽ k đc)
//         //tại bước này có thể định nghĩa hàm theo ý muốn , (bao nhiêu tham số , làm việc gì. ...)
//     }
// }


// function beep()
// {
//     console.log("BÍP BÍP BÍP , xong cmnr");
// }

// makeCoffeMachine.makeCoffe(beep);
// //beep duoc truyen vao la 1 callback

//-----------------------------------NEU CALLBACK K GOI DUOC THI NHO RESOLVE TRA VE GIUM
// doAfter = function(callback,time){
//     return setTimeout(callback,time)
//   }
  
//   add = function(a,b){
//     return a+b;
//   }
  
//   console.log(doAfter(test(),1000));
  


function doAfter(func , time)
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(func);
    },time);
  })
}

function add(a,b)
{
  return (a+b);
}

(doAfter(add(1,2),1000).then(function(res){
  console.log(res);
}));
