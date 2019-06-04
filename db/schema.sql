DROP DATABASE IF EXISTS redeployDB;
CREATE DATABASE redeployDB;
USE redeployDB;

CREATE TABLE accounts
(
    name VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL, 
    city VARCHAR (255) NOT NULL, 
    state VARCHAR (255) NOT NULL, 
    zipcode VARCHAR (255) NOT NULL, 
    contact_name VARCHAR (255) NOT NULL, 
    phone_number VARCHAR (255) NOT NULL, 
    fax_number VARCHAR (255) NOT NULL, 
    email VARCHAR (255) NOT NULL, 
    charity BOOLEAN  
);

CREATE TABLE donations
(
    item_description VARCHAR (255) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR (255) NOT NULL,
    status VARCHAR (255) NOT NULL
);

CREATE TABLE login 
(
    account_id INT NOT NULL,
    username VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    PRIMARY KEY (account_id)
);