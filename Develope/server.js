const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

const app = express();
const PORT = process.env.PORT || 3000;

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
    console.log(`Connected to the classlist_db database.`)
);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

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
                    process.exit();

            }
        })

}

departments = ()=> {
    const mysql = 'SELECT * FROM department';
}
roles = ()=> {
    const mysql = 'SELECT * FROM department';
}
employees = ()=> {
    const mysql = 'SELECT * FROM department';
}
updEmployeeRole = ()=> {
    const mysql = 'SELECT * FROM department';
}
updManagers = ()=> {
    const mysql = 'SELECT * FROM department';
}
viewEmManager = ()=> {
    const mysql = 'SELECT * FROM department';
}
viewEmDepartment = ()=> {
    const mysql = 'SELECT * FROM department';
}
dltDepartments = ()=> {
    const mysql = 'SELECT * FROM department';
}
dltRoles = ()=> {
    const mysql = 'SELECT * FROM department';
}
dltEmployees = ()=> {
    const mysql = 'SELECT * FROM department';
}


employeeMenu();

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));