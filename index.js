// Add necessary resources
const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const team = []

// Generate HTML page
// const generateHTML = require('./html/test')

// Add questions for user input
// Should this be seperated by type of employee?
const questions = [

{   type: 'input',
    message: 'Enter name:',
    name: 'name'
},
{
    type: 'input',
    message: 'Enter employee ID',
    name: 'id'
},
{
    type: 'input',
    message: 'Enter employee email',
    name: 'email'
}
]
const mainMenu = () => {
    inquirer.prompt({
        type: "list", 
        name: "direction",
        message: "What type of employee would you like to create?",
        choices: ["Manager", "Engineer", "Intern", "Done"]
    }) .then(answer => {
        if(answer.direction === "Manager"){
            addManager()
        } else if (answer.direction === "Engineer") {
            addEngineer()
        } else if (answer.direction === "Intern") {
            addIntern()
        } else {
            // buildTeam()
            console.log(team)
        }
    })
}
const addManager = () => {
    const managerQuestions = [...questions, {type: "input", name: "officeNumber",  message: "Enter office number"}]
    console.log(managerQuestions)
    inquirer.prompt(managerQuestions).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        mainMenu();
    })
}
const addEngineer = () => {
    const engineerQuestions = [...questions, {type: "input", name: "gitHub",  message: "Enter gitHub"}]
    console.log(engineerQuestions)
    inquirer.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
        team.push(engineer)
        mainMenu();
    })
    
}
const addIntern = () => {
    const internQuestions = [...questions, {type: "input", name: "school",  message: "Enter school"}]
    console.log(internQuestions)
    inquirer.prompt(internQuestions).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        mainMenu();
    })
}


mainMenu();