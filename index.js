console.log('before..');
 getUser(12, (user)=>{
    console.log('user ..'+user);
    getRepositories(user.gitHubUsername,(repos)=>{
        console.log('reposes...',repos);
        // call to commit
        getCommits(repos,displayCommits) // here we replace call
    })
});
console.log('after....');

// name function ....
function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('getting data from database...');
        callback({id:id,gitHubUsername:'Mosh'})
    }, 2000);
    
}

function getRepositories(username,callback){

    setTimeout(() => {
        callback(['repo1','repo2','repo3','repo'])
    }, 1000);
}

function getCommits(repo,callback){
    setTimeout(() => {
        callback(['initial commit','changes in header']);
    }, 1000);
}