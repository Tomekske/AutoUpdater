"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sqlite = void 0;
var Database = require("better-sqlite3");
var logger_1 = require("../logger/logger");
var helper_1 = require("../helper/helper");
var enums_1 = require("../helper/enums");
var path = require("path");
var Sqlite = /** @class */ (function () {
    /**
     * Base constructor for derived classes
     */
    function Sqlite() {
        this.productionDb = path.join(helper_1.Helper.pathMyDocuments(), enums_1.App.name, enums_1.App.productionDb);
        this.debugDb = path.join(helper_1.Helper.pathMyDocuments(), enums_1.App.name, enums_1.App.debugDb);
        this.connection = new Database(helper_1.Helper.isProduction(true) ? this.productionDb : this.debugDb, { verbose: console.log });
        // Create table when it doesn't exists
        if (!this.tableExists()) {
            this.createTable();
        }
    }
    /**
     * Close the database
     */
    Sqlite.prototype.dbClose = function () {
        logger_1.Logger.Log().debug('Close the database connection.');
        this.connection.close();
    };
    return Sqlite;
}());
exports.Sqlite = Sqlite;
//# sourceMappingURL=sqlite.js.map