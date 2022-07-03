const { app } = require('electron')
const { createWindow } = require('./modules/WhatsApp.js')
const { createTray } = require('./modules/Tray.js')

function App () {
  const win = createWindow() 
  const tray = createTray(app)
}

app.whenReady().then(App)

