const { Menu, Tray } = require('electron')

function createTray (app) {
  const tray = new Tray('./build/icon.png')

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click: function() {
      win.show()
    }},
    { label: 'Quit', click: function() {
      app.exit() 
    }}
  ])

  tray.setToolTip('WhatsApp')
  tray.setContextMenu(contextMenu)

  return tray
}

module.exports = {
  createTray
}
