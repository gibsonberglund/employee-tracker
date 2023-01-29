//import all modules
const inquirer = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '#SquealMouse1',
        database: 'employee_db'
    }
);

//functions for each mainmenu choice
function viewEmps() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.log(results)
    });
    mainmenu();
};

function viewRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.log(results)
    });
    mainmenu();
};

//inquirer and db query for adding role
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the role ID number?',
                name: 'addRoleId'
            },
            {
                type: 'input',
                message: 'What is the role title?',
                name: 'addRoleTitle'
            },
            {
                type: 'input',
                message: 'What is the salary for this role?',
                name: 'addRoleSal'
            },
            {
                type: 'input',
                message: 'What is the department ID for this role?',
                name: 'addRoleDeptId'
            }
        ])
        .then(function(response) {
            db.query(`INSERT INTO roles (id, title, salary, dept_id)VALUES (${response.addRoleId}, '${response.addRoleTitle}', ${response.addRoleSal}, ${response.addRoleDeptId});`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                };
                mainmenu();
            });
    });
};

function viewDepts() {
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results)
    });
    mainmenu();
};

function createDept() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the department ID number?',
            name: 'addDeptId'
        },
        {
            type: 'input',
            message: 'What is the department name?',
            name: 'addDeptName'
        }
    ])
    .then(function(response) {
        console.log(response);
        db.query(`INSERT INTO departments (id, title)VALUES (${response.addDeptId}, '${response.addDeptName}')`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            };
        });
    mainmenu();
    });
};

//inquirer and db query for adding an employee
function addEmp() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee ID number:',
                name: 'addEmpId'
            },
            {
                type: 'input',
                message: 'Employee first name:',
                name: 'addEmpfirstname'
            },
            {
                type: 'input',
                message: 'Employee last name:',
                name: 'addEmplastname'
            },
            {
                type: 'input',
                message: 'Employee role ID:',
                name: 'addEmpRoleId'
            },
            {
                type: 'input',
                message: 'Manager ID (leave blank if no manager):',
                name: 'addEmpMan'
            }
        ])
        .then(function (response) {
            //const newEmp = new Employee(response.addEmpId, response.addEmpfirstname, response.addEmplastname, response.addEmpRoleId, response.addEmpMan)
            console.log(response);
            db.query(`INSERT INTO employees (id, first_name, last_name, role_id, manager_id)VALUES (${response.addEmpId}, '${response.addEmpfirstname}', '${response.addEmplastname}', ${response.addEmpRoleId}, ${response.addEmpMan});`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            });
        mainmenu();
    });
};

//inquirer and db query for udpating employee role
function updateEmp() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the ID number of the employee you would like to update',
                name: 'upEmpId'
            },
            {
                type: 'input',
                message: 'Enter the new role ID of this employee',
                name: 'newRoleId'
            }
        ])
        .then(function(response) {
            db.query(`UPDATE employees SET role_id = ${response.newRoleId} WHERE id = ${response.upEmpId};`), (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                };
            };
            console.log(response);
            mainmenu();
        });
};


//mainmenu function
function mainmenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'mainmenu',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
            },
        ])
        .then((response) => {
            //All Employees       
            if (response.mainmenu === 'View All Employees') {
                console.log(response);
                //call the function to SELECT * FROM employees
                viewEmps();
                //restart inquirer
    //Add Employee
            } else if (response.mainmenu === 'Add Employee') {
                console.log(response);
                addEmp();
    //Update Role
            } else if (response.mainmenu === 'Update Employee Role') {
                console.log(response);
                updateEmp();
    //View all Roles
            } else if (response.mainmenu === "View All Roles") {
                console.log(response);
                viewRoles();
    //Add Role
            } else if (response.mainmenu === "Add Role") {
                console.log(response);
                addRole();
    //View all Depts
            } else if (response.mainmenu === 'View All Departments') {
                console.log(response);
                viewDepts();
    //Add Depts
            } else if (response.mainmenu === "Add Department") {
                console.log(response);
                createDept();
            };
        });
};

//run mainmenu function
mainmenu();
