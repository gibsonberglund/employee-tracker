//import all modules
const inquirer = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


function mainmenu() {
    inquirer
    .prompt([
    {type: 'list',
        message: 'What would you like to do?',
        name: 'mainmenu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
        }
    ])
    .then(function(response) {
 //All Employees       
        if (response === 'View All Employees') {
        console.log(response);
    //do SELECT * FROM employees and show results
            db.query('SELECT * FROM employees', function (err, results) {
                console.log(results)
            })
//restart inquirer
        mainmenu();

        } else if (response === 'Add Employee') {
            console.log(response);
//Add Employee
            inquirer
                .prompt([
                    {type: 'input',
                    message: 'Employee ID number:',
                    name: 'addEmpId'
                },
                {type: 'input',
                    message: 'Employee first name:',
                    name: 'addEmpfirstname'
                },
                {type: 'input',
                    message: 'Employee last name:',
                    name: 'addEmplastname'
                },
                {type: 'input',
                    message: 'Department:',
                    name: 'addEmpDept'
                },
                {type: 'input',
                    message: 'Role:',
                    name: 'addEmpRole'
                },
                {type: 'input',
                    message: 'Salary:',
                    name: 'addEmpSal'
                },
                {type: 'input',
                    message: 'Manager name (leave blank if this employee is a manager):',
                    name: 'addEmpMan'
                }
                ])
            .then(function(response) {
//create new instance of class Employee
//console log Emplyee
//connect to sql db
//run INSERT INTO employees(Employee)
//VALUES (addEmpId, addEmpName, addEmpDept, addEmpRole,  addEmpSal, addEmpMan)
            })






            mainmenu();
//Update Role
        } else if (response === 'Update Employee Role') {
            console.log(response);
            mainmenu();
//All Roles
        } else if (response === "View All Roles") {
            console.log(response);
            mainmenu();
//Add Role
        } else if (response === "Add Role") {
            console.log(response);
            mainmenu();
//All Depts
        } else if (response === 'View All Departments') {
            console.log(response);
            mainmenu();
//Add Depts
        } else if (response === "Add Department") {
            console.log(response);
            mainmenu();

        }
    })
    };

//run inquirer function
mainmenu();
