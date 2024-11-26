import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
      icon:  path.join(app.getAppPath(), '/src/assets/flux-icon-v1.ico'),
      show: false
  });
  mainWindow.maximize();
  mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
  mainWindow.show();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});