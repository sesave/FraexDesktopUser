const electron = require('electron');
var mysql = require('mysql');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const remote = require('electron').remote;
const {dialog} = require('electron').remote;
const s = document.getElementById('submit');
const b = document.getElementById('back');
const password = require('node-php-password');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "fraex"
 });
 conn.connect();

s.addEventListener('click', function(event) {
    var senha;
    var x = document.getElementById("email").value
    var z = document.getElementById("pass").value
    console.log(x,z);
    const sql = conn.query("Select * from user_tb_register where res_st_email= "+conn.escape(x), function (error,results,fields){
        if(error){
            console.log(error);
            conn.end();
        }else{
            console.log(results[0].res_st_email);
            senha = results[0].res_st_passwrd;   
            if(password.verify(z,senha)){
                dialog.showMessageBox({message:'Login efetuado com sucesso',title: 'Login',type:'info'},() =>{

                });
            }else{
                dialog.showMessageBox({message:'As senhas não coincidem, tente novamente',title: 'Login',type:'error'},() =>{

                });
                location.reload();
            }
        }
        conn.end();
     });
})



b.addEventListener('click', function(event) {
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