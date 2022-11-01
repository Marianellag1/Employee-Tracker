const mysql = require('mysql2');
const console = require('console.table');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'root',
        database: 'employees_db'
    },

    );

const employeeMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: [
                    `View all Departments`,
                    `View all Roles`,
                    `View all Employees`,
                    `Update an Employee Role`,
                    `Update Employee Managers`,
                    `View Employees by Manager`,
                    `View Employees by Department`,
                    `Delete Departments`,
                    `Delete Roles`,
                    `Delete Employees`,
                    `Quit`,
                ]
            }
        ]).then(ans => {
            switch (ans.menu) {
                case 'View all Departments':
                    departments();
                    break;
                case 'View all Roles':
                    roles();
                    break;
                case 'View all Employees':
                    employees();
                    break;
                case 'Update an Employee Role':
                    updEmployeeRole();
                    break;
                case 'Update Employee Managers':
                    updManagers();
                    break;
                case 'View Employees by Manager':
                    viewEmManager();
                    break;
                case 'View Employees by Department':
                    viewEmDepartment();
                    break;
                case 'Delete Departments':
                    dltDepartments();
                    break;
                case 'Delete Roles':
                    dltRoles();
                    break;
                case 'Delete Employees':
                    dltEmployees();
                    break;
                case 'Quit'://should end node server.js and keep code
                    console.log('Goodbye!');//Works!!
                    process.end();

            }
        })

}

departments = () => {
    const mysql = 'SELECT * FROM department';
    db.query(mysql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.table(result);
        employeeMenu();
    })
},

    roles = () => {
        const mysql = 'SELECT * FROM role';
        db.query(mysql, (err, result) => {
            if (err) {
                return console.log(err);
            }
            console.table(result);
            employeeMenu();
        })
    },

    employees = () => {
        const mysql = 'SELECT * FROM department';
    },

    updEmployeeRole = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'Please enter employees first name'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Please enter employees last name'
                },
                {
                    type: 'number',
                    name: 'role_id',
                    message: 'Please enter id to update student role'
                }
            ]).then(results => {
                db.query('SELECT * FROM course_names', function (err, results) {
                    console.log(results);
                })
            })
    };

updManagers = () => {
    const mysql = 'SELECT * FROM department';
},

    viewEmManager = () => {
        const mysql = 'SELECT * FROM department';
    },

    viewEmDepartment = () => {
        const mysql = 'SELECT * FROM department';
    },

    dltDepartments = () => {
        const mysql = 'SELECT * FROM department';
    },

    dltRoles = () => {
        const mysql = 'SELECT * FROM department';
    },

    dltEmployees = () => {
        const mysql = 'SELECT * FROM department';
    },


    employeeMenu();
