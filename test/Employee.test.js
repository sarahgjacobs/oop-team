const Employee = require("../lib/Employee")
test("Employee values test", () => {
    const employee = new Employee("Your Name", "1234", "email@email.com")
    expect(employee.name).toBe("Your Name")
    expect(employee.id).toBe("1234")
    expect(employee.email).toBe("email@email.com")
    expect(employee.getName()).toBe("Your Name")
    expect(employee.getId()).toBe("1234")
    expect(employee.getEmail()).toBe("email@email.com")
    expect(employee.getRole()).toBe("Employee")
})