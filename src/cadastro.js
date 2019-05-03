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
    let dateValue = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let ableValue = 1;
    if(passValue === cpassValue ){
        passValue = phpPass.hash(passValue);
        let insertValues = [userValue,passValue,nameValue,emailValue,idValue,dateValue];
        
        var sql = "INSERT INTO `user_tb_register`(res_st_username,res_st_passwrd,res_st_name,res_st_email,res_st_userid,res_dt_date,res_in_able) VALUES ("+mysql.escape(userValue)+","+mysql.escape(passValue)+","+mysql.escape(nameValue)+","+mysql.escape(emailValue)+","+mysql.escape(idValue)+","+mysql.escape(dateValue)+","+mysql.escape(ableValue)+")";
        
        //var value2 = [userValue,passValue,nameValue,emailValue,idValue,dateValue]
        conn.query(sql,function (err, result) {
        if (err){
            alert('Servidor mysql não iniciado. Por favor inicie o servidor MySQL antes de fazer o cadastro');
        }else{
            console.log("1 record inserted");
        dialog.showMessageBox({message:'Cadastro feito com sucesso',title: 'Cadastro',type:'info'},() =>{
            var window = remote.getCurrentWindow();
                    const modalPath = path.join('file://',__dirname, 'login.html')
                    let win = new BrowserWindow({width: 1024, height: 720})
                    win.on('close', function() {win=null})
                    win.loadURL(modalPath)
                    window.close();
                    win.once('ready-to-show', () => {   
                        win.show()
                    }) 
        });
        }
  });
    }else{
        dialog.showMessageBox({message:'As senhas não coincidem, tente novamente',title: 'Cadastro',type:'error'},() =>{
            history.back();
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