-- Active: 1751412771488@@127.0.0.1@3306@auth_system
CREATE DATABASE auth_system;
USE auth_system;

GRANT ALL PRIVILEGES ON auth_system.* TO 'testeo'@'localhost';

CREATE DATABASE auth_system;

USE auth_system;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  avatar_url TEXT
);


show tables;
SELECT * FROM users;
