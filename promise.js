// for test purpose will we convert callbacks using promise

const p= new Promise(function(resolve,reject){
    
    setTimeout(() => {
        //resolve(12);
        reject(new Error());
    }, 2000);

});

p.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})