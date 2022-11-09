INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

      
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", "100000", 1),
       ("Salesperson", "80000", 1),
       ("Lead Engineer", "150000", 2),
       ("Software Engineer", "120000", 2),
       ("Account Manager", "160000", 3),
       ("Accountant", "125000", 3),
       ("Legal Team Lead", "250000", 4),
       ("Lawyer", "190000", 4);
-- roles taken from class hours quick challange walkthrough
-- roles are joined to department

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Edna", "Mode", 1, 1),
       ("Tony", "Montana", 2, null),
       ("Wednesday", "Addams", 3, 2),
       ("Ace", "Ventura", 4, 2),
       ("Sarah", "Connor", 5, null),
       ("Rocky", "Balboa", 6, null),
       ("Katniss", "Everdeen", 7, 1);