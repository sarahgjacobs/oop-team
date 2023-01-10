// Add necessary resources
const fs = require('fs')
const inquirer = require('inquirer')

// Generate HTML page
const generateHTML = require('./html/test')

// Add questions for user input
// Should this be seperated by type of employee?
const questions = [

{   type: 'input',
    message: 'Enter name:',
    name: 'name'
}
{
    type: 'input',
    message: 'Enter employee ID',
    name: 'id'
}
]




