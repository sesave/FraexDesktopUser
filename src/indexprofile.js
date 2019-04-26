const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const remote = require('electron').remote;

const cryptoBtn = document.getElementById('btn-crypto')
const graphBtn = document.getElementById('btn-graph')
const outBtn = document.getElementById('btn-signout')

cryptoBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    const modalPath = path.join('file://',__dirname, 'cryptos.html')
    let win = new BrowserWindow({width: 1024, height: 720})
    win.on('close', function() {win=null})
    win.loadURL(modalPath)
    window.close();
    win.once('ready-to-show', () => {   
        win.show()
    })  
})

graphBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    const modalPath = path.join('file://',__dirname, 'graficos.html')
    let win = new BrowserWindow({width: 1024, height: 720})
    win.on('close', function() {win=null})
    win.loadURL(modalPath)
    window.close();
    win.once('ready-to-show', () => {   
        win.show()
    })  
})

outBtn.addEventListener('click', function(event) {
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