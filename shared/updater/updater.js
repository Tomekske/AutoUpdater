"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
var electron_updater_1 = require("electron-updater");
var logger_1 = require("../logger/logger");
/**
 * Class to automatically update the application
 */
var Updater = /** @class */ (function () {
    /**
     * Updater constructor
     */
    function Updater() {
        console.log("Updater-constructor");
        electron_updater_1.autoUpdater.checkForUpdates();
    }
    /**
     * Method to check for new updates
     */
    Updater.prototype.checkForUpdates = function () {
        electron_updater_1.autoUpdater.on('checking-for-updatee', function (info) {
            console.log("Checking for updates: " + info);
            logger_1.Logger.Log().debug("Checking for updates: " + info);
        });
    };
    /**
     * Method to check whether an update is available
     */
    Updater.prototype.isUpdateAvailable = function () {
        electron_updater_1.autoUpdater.on('update-available', function (info) {
            console.log("Update available: " + info);
            logger_1.Logger.Log().debug("Update available: " + info.releaseNotes);
        });
    };
    /**
     * Method to check whether an update is not available
     */
    Updater.prototype.isUpdateNotAvailable = function () {
        electron_updater_1.autoUpdater.on('update-not-available', function (info) {
            console.log("Update not available: " + info);
            logger_1.Logger.Log().debug("Update not available: " + info);
        });
    };
    /**
     * Method to check whether an error occurred
     */
    Updater.prototype.error = function () {
        electron_updater_1.autoUpdater.on('error', function (error) {
            logger_1.Logger.Log().debug("error: " + error);
        });
    };
    /**
     * Method to check the download progress of the update
     */
    Updater.prototype.downloadProgress = function () {
        electron_updater_1.autoUpdater.on('download-progress', function (progress) {
            logger_1.Logger.Log().debug("Update download speed: " + progress.bytesPerSecond + " - Download " + progress.percent);
        });
    };
    /**
     * Method to install the update
     */
    Updater.prototype.updateDownloaded = function () {
        electron_updater_1.autoUpdater.on('update-downloaded', function (info) {
            logger_1.Logger.Log().debug("Update is being installed: " + info);
            electron_updater_1.autoUpdater.quitAndInstall();
        });
    };
    return Updater;
}());
exports.Updater = Updater;
//# sourceMappingURL=updater.js.map