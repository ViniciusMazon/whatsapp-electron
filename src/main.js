const {app, BrowserWindow} = require('electron')

 function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
  
    win.loadURL('https://web.whatsapp.com/')
  }
  
  app.on('ready', createWindow)
