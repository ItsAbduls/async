async function displayCommits() {
    const user = await getUser(23);
    const repos = await getRepositories(user.gitHubUsername);
    const commit = await getCommits(repos[0]);
    console.log(commit);
}
displayCommits();

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
