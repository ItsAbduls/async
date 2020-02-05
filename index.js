console.log('before..');
 getUser(12, displayUser);
console.log('after....');

// name function ....&&&&&&&&&
function displayCommits(commits) {
    console.log(commits);
}
// display user repositories
function displayRepositories(repos){
    console.log(repos);
    getCommits(repos,displayCommits) // here we replace anonyms function with name function
}

function displayUser(user) {
    console.log(user);
    getRepositories(user.gitHubUsername,displayRepositories)
}
// call backs....&&&&&&&&&
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