const express = require('express');
const mysql = require('mysql2');
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

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));