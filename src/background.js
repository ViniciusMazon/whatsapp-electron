const { app, session } = require('electron')
const { createWindow } = require('./modules/whatsApp.js')
const { createTray } = require('./modules/tray.js')

function App () {
  const win = createWindow() 
  const tray = createTray(app)
}

function clearServiceWorkers () {
  const ses = session.defaultSession;
  ses.flushStorageData();
  ses.clearStorageData({ storages: ['serviceworkers'] });
}

app.on('ready', App)
app.on('before-quit', clearServiceWorkers);
app.on('window-all-closed', () => app.quit());
