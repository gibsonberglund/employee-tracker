/* tables with:
Employee id, first name, last name, department, salary, title/role, manager
*/

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments(
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (dept_id)
    REFERENCES departments(id)
);

CREATE TABLE employees(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
);

