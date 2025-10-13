// electron.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: { nodeIntegration: false },
  });

  const startUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://dev.procope.kr';

  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);
