import { BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import { Logger } from '../logger/logger';

/**
 * Class to automatically update the application
 */
export class Updater { 
    win: BrowserWindow;

    /**
     * Updater constructor
     */
    constructor(win: BrowserWindow) {
        this.win = win;

       Logger.Log().error("Updater-constructor");
        autoUpdater.checkForUpdates();
    }

    /**
     * Method to check for new updates
     */
    checkForUpdates() {
        autoUpdater.on('checking-for-update', (info) => {
            Logger.Log().error(`Checking for updates: ${info}`);
        });    
    }

    /**
     * Method to check whether an update is available
     */
    isUpdateAvailable() {
        autoUpdater.on('update-available', (info) => {
            Logger.Log().error(`Update available: ${info}`);
        });
    }

    /**
     * Method to check whether an update is not available
     */
    isUpdateNotAvailable() {
        autoUpdater.on('update-not-available', (info) => {
            Logger.Log().error(`Update not available: ${info}`);
            if(this.win) {
                Logger.Log().error(`WIN BESTAAAT`);
                this.win.webContents.send("update", true);
            } else {
                Logger.Log().error(`WIN BESTAAAT NIEEEEEEEEET`);
            }
        });        
    }

    /**
     * Method to check whether an error occurred
     */
    error() {
        autoUpdater.on('error', (error) => {
            Logger.Log().error(`error: ${error}`);
        });
    }

    /**
     * Method to check the download progress of the update
     */
    downloadProgress() {
        autoUpdater.on('download-progress', (progress) => {
            Logger.Log().error(`Update download speed: ${progress.bytesPerSecond} - Download ${progress.percent}`);
        });
    }

    /**
     * Method to install the update
     */
    updateDownloaded() {
        autoUpdater.on('update-downloaded', (info) => {
            Logger.Log().error(`Update is being installed: ${info}`);
            autoUpdater.quitAndInstall();
        });
    }
}
