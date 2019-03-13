const electron = require('electron');
var mysql = require('mysql');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const remote = require('electron').remote;
const submitBtn = document.getElementById('submit');
const {dialog} = require('electron').remote;
const backBtn = document.getElementById('back');
const phpPass = require('node-php-password');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "fraex"
 });
 conn.connect();

 submitBtn.addEventListener('click', function(event) {
    let emailValue = document.getElementById("email").value;
    let passValue = document.getElementById("password").value;
    let cpassValue = document.getElementById("cpassword").value;
    let userValue = document.getElementById("username").value;
    let idValue = document.getElementById("userid").value;
    let nameValue = document.getElementById("name").value;

    if(passValue === cpassValue ){

    }else{
        dialog.showMessageBox({message:'As senhas não coincidem, tente novamente',title: 'Cadastrp',type:'error'},() =>{

        });
    }

    console.log(emailValue,passValue);
    
        conn.end();
})

backBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    const modalPath = path.join('file://',__dirname, 'index.html')
    let win = new BrowserWindow({width: 1024, height: 720})
    win.on('close', function() {win=null})
    win.loadURL(modalPath)
    window.close();
    win.once('ready-to-show', () => {   
        win.show()
    })  
})