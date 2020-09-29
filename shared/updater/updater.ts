import { autoUpdater } from 'electron-updater';
import { truncateSync } from 'fs';
import { Logger } from '../../logger';

export class Updater { 
    constructor() {
        autoUpdater.checkForUpdates();
    }

    checkForUpdates() {
        autoUpdater.on('checking-for-update', () => {
            Logger.Log().debug("Checking for updates");
        });    
    }

    isUpdateAvailable() /*: boolean */{
        autoUpdater.on('update-available', (info) => {
            console.log("Update available");
            Logger.Log().debug("Update available");
        });    
        //return true;
    }

    isUpdateNotAvailable()/*: boolean*/{
        autoUpdater.on('update-not-available', (info) => {
            Logger.Log().debug("Update not available");
        });        
        //return true;
    }

    error() {
        autoUpdater.on('error', (error) => {
            Logger.Log().debug(`error: ${error}`);
        });
    }

    downloadProgress() {
        autoUpdater.on('download-progress', (progress) => {
            Logger.Log().debug(`Download speed: ${progress.bytesPerSecond} - Download ${progress.percent}`);
        });
    }

    updateDownloaded() {
        autoUpdater.on('update-downloaded', (info) => {
            Logger.Log().debug("Update will be installed");
            autoUpdater.quitAndInstall();
        });
    }


}
