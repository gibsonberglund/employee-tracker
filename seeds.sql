INSERT INTO departments (id, title)
VALUES (1, 'Engineering'),
(2, 'Finance'),
(3, 'Legal'),
(4, 'Sales');

INSERT INTO roles (id, title, salary, dept_id)
VALUES (1, 'Lead Engineer', 100000, 1),
(2, 'Junior Engineer', 80000, 1),
(3, 'Account Manager', 100000, 2),
(4, 'Accountant', 80000, 2),
(5, 'Lead Attorney', 100000, 3),
(6, 'Junior Attorney', 75000, 3),
(7, 'Sales Lead', 90000, 4),
(8, 'Sales Associate', 65000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (001, 'John', 'Smith', 1, null),
(002, 'Jane', 'Doe', 2, 001),
(003, 'Earl', 'Mud', 3, null),
(004, 'Debbie', 'Downer', 4, 003),
(005, 'Wednesday', 'Adams', 5, null),
(006, 'Sebastian', 'Bach', 6, 005),
(007, 'Rachel', 'Fromfriends', 7, null),
(008, 'Joey', 'Fromfriends', 8, 007);
