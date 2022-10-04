DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL -- to hold department name**
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, -- to hold role title**
    salary DECIMAL, -- to hold role salary**
    department_id INT -- to hold reference to department role belongs to**
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, -- to hold employee first name**
    last_name VARCHAR(30) NOT NULL, -- to hold employee last name**
    role_id INT, -- to hold reference to employee role**
    manager_id INT -- to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)**
);

-- FROM NOTES **
-- show tables; works!