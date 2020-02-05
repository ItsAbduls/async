
getUser(12)
  .then(user=>getRepositories(user.gitHubUsername))
  .then(repo=>getCommits(repo[0]))
  .then(commit=>{
      console.log('commits.',commit)
  }).catch(err=>{
      console.log(err)
  })


function getUser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('calling to github api for user');
            resolve({id:id,gitHubUsername:'Mosh'})
        }, 2000);
    })
    
}

function getRepositories(username,callback){

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log('calling to github api for repos');
            resolve(['repo1','repo2','repo3','repo'])
        }, 1000);
    })

}

function getCommits(repo,callback){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['initial commit','changes in header']);
        }, 1000);
    })
    
}



























// const p= new Promise(function(resolve,reject){
    
//     setTimeout(() => {
//         //resolve(12);
//         reject(new Error());
//     }, 2000);

// });

// p.then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })