// const request = require('request');

// console.time("Time this");

// request('https://randomuser.me/api/', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });



// console.timeEnd("Time this");



const axios = require('axios');



    


 

getData= async () => {
   
await axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});


axios.get('https://jsonplaceholder.typicode.com/todos/2')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});

};


getData();

