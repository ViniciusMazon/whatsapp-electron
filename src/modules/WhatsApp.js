const { BrowserWindow } = require('electron')

function createWindow () {
  win = new BrowserWindow({
    width: 800, 
    height: 600,
    icon: './build/icon.png'
  })
  win.on('close', event => {
    event.preventDefault()
    win.hide()
  })
  win.on('minimize', event => {
    event.preventDefault()
    win.hide()
  })
  win.loadURL('https://web.whatsapp.com/', {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
  })

  return win
}

module.exports = {
  createWindow
}
