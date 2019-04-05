const electron = require('electron');
var mysql = require('mysql');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const remote = require('electron').remote;
const {dialog} = require('electron').remote;
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');
const password = require('node-php-password');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "fraex"
 });
 conn.connect();

 submitBtn.addEventListener('click', function(event) {
    let senha;
    let emailValue = document.getElementById("email").value;
    let passValue = document.getElementById("pass").value;
    console.log(emailValue,passValue);
    const sql = conn.query("Select * from user_tb_register where res_st_email= "+conn.escape(emailValue), function (error,results,fields){
        if(error){
            console.log(error);
            conn.end();
        }else{
            console.log(results[0].res_st_email);
            senha = results[0].res_st_passwrd;   
            if(password.verify(passValue,senha)){
                dialog.showMessageBox({message:'Login efetuado com sucesso',title: 'Login',type:'info'},() =>{
                    var window = remote.getCurrentWindow();
                    const modalPath = path.join('file://',__dirname, 'indexprofile.html')
                    let win = new BrowserWindow({width: 1024, height: 720})
                    win.on('close', function() {win=null})
                    win.loadURL(modalPath)
                    window.close();
                    win.once('ready-to-show', () => {   
                        win.show()
                    })  
                });
            }else{
                dialog.showMessageBox({message:'As senhas não coincidem, tente novamente',title: 'Login',type:'error'},() =>{
                    location.reload();
                });
                
            }
        }
        conn.end();
     });
})



backBtn.addEventListener('click', function(event) {
    let window = remote.getCurrentWindow();
    const modalPath = path.join('file://',__dirname, 'index.html')
    let win = new BrowserWindow({width: 1024, height: 720})
    win.on('close', function() {win=null})
    win.loadURL(modalPath)
    window.close();
    win.once('ready-to-show', () => {   
        win.show()
    })  
})