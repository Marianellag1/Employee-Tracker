const express = require('express');
const console = require('console.table');
const inquirer = require('inquirer');
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
        password: 'root',
        database: 'employees_db'
    },

);

function init() {
    employeeMenu();
};

const employeeMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: [
                    `View all departments`,
                    `View all roles`,
                    `View all employees`,
                    `Add a department`,
                    `Add an employee`,
                    `Add a role`,
                    `Update an employee role`,
                    `View employees by department`,
                    `Quit`,
                ]
            }
        ]).then(ans => {
            switch (ans.menu) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Update an employee role':
                    updEmployeeRole();
                    break;
                case 'View employees by department':
                    viewEmpDepartment();
                    break;
                case 'Quit'://should end node server.js and keep code
                    exitPromp()
                    break;

            }
        });

};

function viewDepartments() {
    db.query(`
SELECT * FROM department`, function (err, res) {
        if (err) throw err;
        console.getTable('All Departments:', res);
    });
};

function viewEmployees() {
    db.query(`
SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, CONCAT(employee.first_name, ' ', employee.last_name) AS manager
FROM employee INNER JOIN roles ON employee.role_id = roles.id
INNER JOIN department on roles.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id`, function (err, res) {
        if (err) throw err;
        console.getTable('All Employees:', res);
        employeeMenu();
    })
};

function viewRoles() {
    db.query(`
SELECT roles.id, roles.title, department.department_name, roles.salary 
FROM roles 
JOIN department ON roles.department_id = department.id`, function (err, res) {
        if (err) throw err;
        console.getTable('All Roles', res);
        employeeMenu();
    })
};



// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//     init();
// });