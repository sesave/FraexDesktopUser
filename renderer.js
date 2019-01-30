// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var buttonLogin = document.querySelector('btn-login');
function loginWindow() {
    buttonLogin.addEventListener('click', () => {
        main.openWindow('page2')
        window.close()
    }, false) 
}
