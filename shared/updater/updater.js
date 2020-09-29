"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
var electron_updater_1 = require("electron-updater");
var logger_1 = require("../../logger");
var Updater = /** @class */ (function () {
    function Updater() {
        electron_updater_1.autoUpdater.checkForUpdates();
    }
    Updater.prototype.checkForUpdates = function () {
        electron_updater_1.autoUpdater.on('checking-for-update', function () {
            logger_1.Logger.Log().debug("Checking for updates");
        });
    };
    Updater.prototype.isUpdateAvailable = function () {
        electron_updater_1.autoUpdater.on('update-available', function (info) {
            console.log("Update available");
            logger_1.Logger.Log().debug("Update available");
        });
        //return true;
    };
    Updater.prototype.isUpdateNotAvailable = function () {
        electron_updater_1.autoUpdater.on('update-not-available', function (info) {
            logger_1.Logger.Log().debug("Update not available");
        });
        //return true;
    };
    Updater.prototype.error = function () {
        electron_updater_1.autoUpdater.on('error', function (error) {
            logger_1.Logger.Log().debug("error: " + error);
        });
    };
    Updater.prototype.downloadProgress = function () {
        electron_updater_1.autoUpdater.on('download-progress', function (progress) {
            logger_1.Logger.Log().debug("Download speed: " + progress.bytesPerSecond + " - Download " + progress.percent);
        });
    };
    Updater.prototype.updateDownloaded = function () {
        electron_updater_1.autoUpdater.on('update-downloaded', function (info) {
            logger_1.Logger.Log().debug("Update will be installed");
            electron_updater_1.autoUpdater.quitAndInstall();
        });
    };
    return Updater;
}());
exports.Updater = Updater;
//# sourceMappingURL=updater.js.map