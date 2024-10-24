//1. 
//Iterating with Async/Await:async function  takes array n logs delay of 1 sec
 const iterateWithAsyncAwait = async arr=> {
    
      for(let x of arr){
        await  new Promise((resolve)=>{setTimeout(resolve,1000)})
        console.log(x);
        
                  
    }
}

//testing
iterateWithAsyncAwait([1,2,3,4,5,5,6,7,6,7]);

// Task 02:
// Awaiting a Call:async function awaitCall fetching data from an API. log the data.
// Task 03:
// Handling Errors
const awaitCall = async (api)=> {
    try {
        const res = await fetch(api) 
        const data = await res.json()
        if (res.status === 200) {
            console.log('Success',data)
        } else {
            console.log('Server error',data.error.message)
        }
    } catch (error) {
        console.log('Fetch Error',error)
    }               
  }
// testing
awaitCall('https://jsonplaceholder.typicode.com/todos/1')

// Task 03:
// Chaining Async/Await:function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
let url1 = 'https://jsonplaceholder.typicode.com/todos/1'
let url2 = 'https://jsonplaceholder.typicode.com/todos/2'
let url3 = 'https://jsonplaceholder.typicode.com/todos/3'
let task = async (x)=>{
    await  new Promise((resolve)=>{setTimeout(resolve,2000)})
    awaitCall(x)
}


async function chainedAsyncFunctions() {
     await task(url1)     
     await task(url2)     
     await task(url3)     
}

//testing
chainedAsyncFunctions()
