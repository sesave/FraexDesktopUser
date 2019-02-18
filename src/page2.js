const electron = require('electron')
const s = document.getElementById('s')

s.addEventListener('click', function(event) {
    var x = document.getElementById("email").value;
    console.log(x);
    alert(x);
})