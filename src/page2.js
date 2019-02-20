const electron = require('electron')
var mysql = require('mysql')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const remote = require('electron').remote
const s = document.getElementById('submit')
const b = document.getElementById('back')

s.addEventListener('click', function(event) {
    var x = document.getElementById("email").value
    var z = document.getElementById("pass").value
    console.log(x,z);
    var conn = mysql.createConnection({
        host: 'sql10.freemysqlhosting.net',
        user: 'sql10279512',
        password: 'Iu79KRlJqt',
        database: 'sql10279512'
    });

    conn.query('SELECT * FROM `user_tb_register` where res_st_email = '+mysql.escape(x), function (error, results, fields) {
        if (error) throw error;
        console.log(results);
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