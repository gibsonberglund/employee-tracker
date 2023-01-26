const Dept = require('./Dept');

class Role extends Dept {
    constructor(deptId, deptName, roleId, title, salary) {
        super(deptId, deptName);
        this.roleId;
        this.title = title;
        this.salar = salary;
    }
};

module.exports = Role;