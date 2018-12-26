//This file is to connect all database components together.
//Component 1 : ErrorHelper
//Component 2 : Database Creation Queries.
//Component 3 : Table Creation Queries.
//Component 4 : Connection Object.
CheckForError = require("./Helpers/ErrorHelper");
let databaseDefinitionHandler = require("./DatabaseDefinitionHandler");

conn = require("../connect")();

exports.hotelQueriesHandler = require("./HotelTable");
exports.userQueries = require("./UserTable");
exports.resQueries = require("./ReservationTable"); 

//Export Another alternative for Database and Tables Creation through one fucntion call.
exports.databaseSetup = function(dbName) {
  databaseDefinitionHandler.databaseCreate(dbName);
  databaseDefinitionHandler.createUserTable();
  databaseDefinitionHandler.createHotelTable();
  databaseDefinitionHandler.createRoomTable();
  databaseDefinitionHandler.createRatesRelationTable();
  databaseDefinitionHandler.createReservationTable();
  databaseDefinitionHandler.proceeds.checkRole();
  databaseDefinitionHandler.proceeds.checkReservation();
  databaseDefinitionHandler.proceeds.updateCheckOut();
  databaseDefinitionHandler.trigs.BeforeInsertHotelTrig();
  databaseDefinitionHandler.trigs.BeforeUpdateHotelTrig();
  databaseDefinitionHandler.trigs.BeforeInsertResTrig();
  databaseDefinitionHandler.trigs.BeforeUpdateResTrig();
  databaseDefinitionHandler.trigs.BeforeUpdateRoomTrig();
  databaseDefinitionHandler.trigs.BeforeInsertRoomTrig();
};
