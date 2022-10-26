const { app, session } = require('electron')
const { createWindow } = require('./modules/whatsApp.js')
const { createTray } = require('./modules/tray.js')
const path = require('path')

function App () {
  const win = createWindow() 
  const tray = createTray(app)

  win.on('page-title-updated', (event,title) => {
    // const title = win.getTitle()
    console.log('title ', title)
    const haveNewMessages = title.includes('(')
    console.log('notification: ', haveNewMessages)
    console.log('title: ', title)
    if(haveNewMessages) {
      tray.setImage(path.join(__dirname, '../assets/icons/notification.png'))
    } else {
      tray.setImage(path.join(__dirname, '../assets/icons/512x512.png'))
    }
  })

}

function clearServiceWorkers () {
  const ses = session.defaultSession;
  ses.flushStorageData();
  ses.clearStorageData({ storages: ['serviceworkers'] });
}

app.on('ready', App)
app.on('before-quit', clearServiceWorkers);
app.on('window-all-closed', () => app.quit());
