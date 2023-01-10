const Engineer = require("../lib/Engineer")
test("Engineer values test", () => {
    const engineer = new Engineer("Your Name", "1234", "email@email.com", "Git User")
    expect(engineer.gitHub).toBe("Git User")
    expect(engineer.getGitHub()).toBe("Git User")
    expect(engineer.getRole()).toBe("Engineer")
})