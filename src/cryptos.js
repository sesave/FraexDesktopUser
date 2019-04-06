const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const remote = require('electron').remote;
const back = document.getElementById('back');
const axios = require('axios');
var btcPrice = document.getElementById('btcPrice');
var ltcPrice = document.getElementById('ltcPrice');
var adaPrice = document.getElementById('adaPrice');
var ethPrice = document.getElementById('ethPrice');
var dashPrice = document.getElementById('dashPrice');
var xmrPrice = document.getElementById('xmrPrice');


setInterval(function(){ getBTC(); }, 1000);
setInterval(function(){ getLTC(); }, 1000);
setInterval(function(){ getADA(); }, 1000);
setInterval(function(){ getETH(); }, 1000);
setInterval(function(){ getDASH(); }, 1000);
setInterval(function(){ getXMR(); }, 1000);

back.addEventListener('click', function(event) {
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
function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BRL&api_key={d674fb5d45d3447fbfe4c90603233ea69d5e51dd511fa13c28dc27608f168145}')
    .then(res => {
        const cryptos = res.data.BRL;
        var lol = 'R$ '+cryptos.toLocaleString('en');
        btcPrice.innerHTML = lol;
    })
};
function getLTC() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BRL&api_key={d674fb5d45d3447fbfe4c90603233ea69d5e51dd511fa13c28dc27608f168145}')
    .then(res => {
        const cryptos = res.data.BRL;
        var lol = 'R$ '+cryptos.toLocaleString('en');
        ltcPrice.innerHTML = lol;
    })
};
function getADA() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=BRL&api_key={d674fb5d45d3447fbfe4c90603233ea69d5e51dd511fa13c28dc27608f168145}')
    .then(res => {
        const cryptos = res.data.BRL;
        var lol = 'R$ '+cryptos.toLocaleString('en');
        adaPrice.innerHTML = lol;
    })
};
function getETH() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BRL&api_key={d674fb5d45d3447fbfe4c90603233ea69d5e51dd511fa13c28dc27608f168145}')
    .then(res => {
        const cryptos = res.data.BRL;
        var lol = 'R$ '+cryptos.toLocaleString('en');
        ethPrice.innerHTML = lol;
    })
};
function getDASH() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=BRL&api_key={d674fb5d45d3447fbfe4c90603233ea69d5e51dd511fa13c28dc27608f168145}')
    .then(res => {
        const cryptos = res.data.BRL;
        var lol = 'R$ '+cryptos.toLocaleString('en');
        dashPrice.innerHTML = lol;
    })
};
function getXMR() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BRL&api_key={d674fb5d45d3447fbfe4c90603233ea69d5e51dd511fa13c28dc27608f168145}')
    .then(res => {
        const cryptos = res.data.BRL;
        var lol = 'R$ '+cryptos.toLocaleString('en');
        xmrPrice.innerHTML = lol;
    })
};