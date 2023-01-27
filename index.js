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

async function mainmenu() {
    await inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'mainmenu',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
            },
        ])
        // .then((response) => {
        //     //All Employees       
        //     if (response.mainmenu === 'View All Employees') {
        //         console.log(response);
        //         //do SELECT * FROM employees and show results
        //         //turn this into a function, and call the function here instead
        //         db.query('SELECT * FROM employees', function (err, results) {
        //             console.log(results)
        //         })
        //         //restart inquirer
        //         mainmenu();
        //     } else if (response === 'Add Employee') {
        //         console.log(response);
        //         //Add Employee
        //         inquirer
        //             .prompt([
        //                 {
        //                     type: 'input',
        //                     message: 'Employee ID number:',
        //                     name: 'addEmpId'
        //                 },
        //                 {
        //                     type: 'input',
        //                     message: 'Employee first name:',
        //                     name: 'addEmpfirstname'
        //                 },
        //                 {
        //                     type: 'input',
        //                     message: 'Employee last name:',
        //                     name: 'addEmplastname'
        //                 },
        //                 {
        //                     type: 'input',
        //                     message: 'Employee role ID:',
        //                     name: 'addEmpRoleId'
        //                 },
        //                 {
        //                     type: 'input',
        //                     message: 'Manager ID (leave blank if no manager):',
        //                     name: 'addEmpMan'
        //                 }
        //             ])
        //             .then(function (response) {
        //                 const newEmp = new Employee(response.addEmpId, response.addEmpfirstname, response.addEmplastname, response.addEmpRoleId, response.addEmpMan)
        //                 console.log(newEmp);
        //                 db.query(`INSERT INTO employee (?)`, newEmp, (err, result) => {
        //                     if (err) {
        //                         console.log(err);
        //                     } else {
        //                         console.log(result);
        //                     }
        //                 });
        //                 mainmenu();
        //             });






        //         mainmenu();
        //         //Update Role
        //     } else if (response === 'Update Employee Role') {
        //         console.log(response);
        //         mainmenu();
        //         //All Roles
        //     } else if (response === "View All Roles") {
        //         console.log(response);
        //         mainmenu();
        //         //Add Role
        //     } else if (response === "Add Role") {
        //         console.log(response);
        //         mainmenu();
        //         //All Depts
        //     } else if (response === 'View All Departments') {
        //         console.log(response);
        //         mainmenu();
        //         //Add Depts
        //     } else if (response === "Add Department") {
        //         console.log(response);
        //         mainmenu();

        //     }
        // });
};

//run inquirer function
mainmenu();
