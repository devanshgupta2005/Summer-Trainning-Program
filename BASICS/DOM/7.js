// function greet(name, callback) {
//     console.log(`I am ${name}`);
//     callback();
// }
// function hello() {
//     console.log("I am trainer..");
// }
// greet("Alice", hello);


// #promises in Java Script
let mypromise = new Promise (( resolve,reject)=>{
    let result = true

    if(result){
        resolve("promise resolved... ")
        
    }else{
        reject("promise reejcted...")
    }

});

mypromise.then((mess)=>{console.log(mess)})
.catch((err)=>{
    console.log(err)
});