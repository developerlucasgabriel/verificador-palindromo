const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Be cautious with nodeIntegration for security
    }
  });

  win.loadFile('src/index.html'); // Load your HTML file
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// const prompt = require('prompt-sync')();

// let frase = prompt('Digite qualquer palavra: ');

// console.log(`Palavra: ${frase.replace('a','o')}`);