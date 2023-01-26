//import all modules
const inquirer = require('inquirer');

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

//connect to sql db
//do SELECT * FROM employees
//console log results
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
//run INSERT INTO employees(id, first_name, last_name, department, salary, title, manager)
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
