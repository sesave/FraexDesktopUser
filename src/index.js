const electron = require('electron')
const remote = require('electron').remote;
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const loginBtn = document.getElementById('btn-login')

loginBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://',__dirname, 'page2.html')
    let win = new BrowserWindow({width: 1024, height: 720})
    var window = remote.getCurrentWindow()
    window.close()
    win.loadURL(modalPath)
    win.show()  
})