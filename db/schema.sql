DROP DATABASE IF EXISTS redeployDB;
CREATE DATABASE redeployDB;
USE redeployDB;

CREATE TABLE accounts
(
    name VARCHAR (255) NOT NULL,
    account_id INT,
    address VARCHAR (255) NOT NULL, 
    city VARCHAR (255) NOT NULL, 
    state VARCHAR (255) NOT NULL, 
    zipcode VARCHAR (255) NOT NULL, 
    contact_name VARCHAR (255) NOT NULL, 
    phone_number VARCHAR (255) NOT NULL, 
    fax_number VARCHAR (255) NOT NULL, 
    email VARCHAR (255) NOT NULL, 
    charity BOOLEAN,
    foreign key (account_id) REFERENCES login(login_id)
);

CREATE TABLE donations
(
    item_description VARCHAR (255) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR (255) NOT NULL UNIQUE,
    charity VARCHAR (255) NOT NULL,  
    status VARCHAR(255)
);

CREATE TABLE login 
(
    login_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    PRIMARY KEY (login_id)
);