const Manager = require("../lib/Manager")
test("Manager values test", () => {
    const manager = new Manager("Your Name", "1234", "email@email.com", "101")
    expect(manager.officeNumber).toBe("101")
    expect(manager.getOfficeNumber()).toBe("101")
    expect(manager.getRole()).toBe("Manager")
})