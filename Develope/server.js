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

const employees = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Update an Employee Role'
        ]
        }
    ])

}

employees();

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));