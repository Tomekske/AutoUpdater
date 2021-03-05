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
    function Updater(event) {
        this.event = event;
        logger_1.Logger.Log().error("Updater-constructor");
        electron_updater_1.autoUpdater.checkForUpdates();
    }
    /**
     * Method to check for new updates
     */
    Updater.prototype.checkForUpdates = function () {
        electron_updater_1.autoUpdater.on('checking-for-update', function (info) {
            logger_1.Logger.Log().error("Checking for updates: " + info);
        });
    };
    /**
     * Method to check whether an update is available
     */
    Updater.prototype.isUpdateAvailable = function () {
        var _this = this;
        electron_updater_1.autoUpdater.on('update-available', function (info) {
            logger_1.Logger.Log().error("Update available: " + info);
            _this.event.reply("is-update-available", true);
        });
    };
    /**
     * Method to check whether an update is not available
     */
    Updater.prototype.isUpdateNotAvailable = function () {
        var _this = this;
        electron_updater_1.autoUpdater.on('update-not-available', function (info) {
            logger_1.Logger.Log().error("Update not available: " + info);
            _this.event.reply("is-update-available", false);
        });
    };
    /**
     * Method to check whether an error occurred
     */
    Updater.prototype.error = function () {
        electron_updater_1.autoUpdater.on('error', function (error) {
            logger_1.Logger.Log().error("error: " + error);
        });
    };
    /**
     * Method to check the download progress of the update
     */
    Updater.prototype.downloadProgress = function () {
        electron_updater_1.autoUpdater.on('download-progress', function (progress) {
            logger_1.Logger.Log().error("Update download speed: " + progress.bytesPerSecond + " - Download " + progress.percent);
        });
    };
    /**
     * Method to install the update
     */
    Updater.prototype.updateDownloaded = function () {
        electron_updater_1.autoUpdater.on('update-downloaded', function (info) {
            logger_1.Logger.Log().error("Update is being installed: " + info);
            electron_updater_1.autoUpdater.quitAndInstall();
        });
    };
    return Updater;
}());
exports.Updater = Updater;
//# sourceMappingURL=updater.js.map