// let infoUser = { userName: "mahsa", password: 2439416 };

let newInfoUser = [];

function infoUser(username, password) { 

    let userName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;
    let temp = {username, password};
    
    newInfoUser.push(temp);

    userName;
    passWord;

    localStorage.setItem('user', JSON.stringify(newInfoUser));  
}

