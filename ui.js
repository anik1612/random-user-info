class UI{
    constructor(){
        this.userName = document.getElementById('user-name');
        this.cell = document.getElementById('cell-num');
        this.age = document.getElementById('age');
        this.mail = document.getElementById('mail');
        this.userImg = document.getElementById('user-img');
    }

    displayUserInfo(user){
        let user_name = `${user.name.title} ${user.name.first} ${user.name.last}`
        this.userName.innerText = 'Name: ' + user_name;
        this.cell.innerText = "Cell Number: " + user.cell;
        this.age.innerText = 'age: ' + user.dob.age; 
        this.mail.innerText = 'Mail: ' + user.email; 
        this.userImg.src = user.picture.large;
    }
}