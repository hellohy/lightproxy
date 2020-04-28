import * as path from 'path';
import { format as formatUrl } from 'url';
import { app, BrowserWindow, protocol } from 'electron';

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadURL(
        formatUrl({
            pathname: path.join(__dirname, '../../index.html'),
            protocol: 'file',
            slashes: true,
        }),
    );

    win.webContents.openDevTools();
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
