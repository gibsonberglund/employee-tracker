//const Dept = require('./Dept');
const Role = require('./Role');

class Employee extends Role {
    constructor(deptId, deptName, roleId, title, sal, empId, firstName, lastName, man) {
        super(deptId, deptName, roleId, title, sal);
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dept = dept;
        this.man = man;
    }
}

module.exports = Employee;