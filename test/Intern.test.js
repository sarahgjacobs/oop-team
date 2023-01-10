const Intern = require("../lib/Intern")
test("Intern values test", () => {
    const intern = new Intern("Your Name", "1234", "email@email.com", "School")
    expect(intern.school).toBe("School")
    expect(intern.getSchool()).toBe("School")
    expect(intern.getRole()).toBe("Intern")
})