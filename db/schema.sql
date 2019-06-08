DROP DATABASE IF EXISTS redeployDB;
CREATE DATABASE redeployDB;
USE redeployDB;

CREATE TABLE donations(
    item_description VARCHAR (255) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR (255) NOT NULL UNIQUE,
    charity VARCHAR (255) NOT NULL,  
    status VARCHAR(255)
