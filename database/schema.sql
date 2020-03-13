DROP DATABASE IF EXISTS pirate_data;

CREATE DATABASE pirate_data;

USE pirate_data;

CREATE TABLE ArrtoZone_Inventory (
  itemID INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(255) NOT NULL,
  item_link VARCHAR (255) NOT NULL
  PRIMARY KEY(itemID)
);