const Manager = require("./JStemps/manager");
const Engineer = require("./JStemps/engineer");
const Intern = require("./JStemps/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "crew.html");

const render = require("./JStemps/htmlRenderer");

const crew = [];

//Roles to enter
function employeeInformation() {
    inquirer.prompt([
        {
            type: "list",
            message: "what type of employee would you like to input",
            name: "name",
            choices: ["Manager", "Engineer", "Intern", "Show Summary"],
        },
    ]).then(val => {
        if (val.name === "Manager") {
            managerInformation();
        } else if (val.name === "Engineer") {
            engineerinformation();
        } else if (val.name === "Intern") {
            internInformation();
        } else if (val.name === "Show Summary") {
            generateHTML(outputPath, render(team));
        };
    });
};

function managerInformation() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Manager's office number?",
            name: "number",
        },
    ]).then(function(answer) {
        let manager = new Manager(answer.name, answer.id, answer.email. answer.number)
        team.push(manager);

        employeeInformation()
    })
};

function engineerInformation() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "Github",
        },
    ]).then(function(answer) {
        let manager = new Engineer(answer.name, answer.id, answer.email. answer.Github)
        team.push(engineer);

        employeeInformation()
    })
};

function internInformation() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your inter's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your inter's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your inter's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your inter's school?",
            name: "school",
        },
    ]).then(function(answer) {
        let manager = new Intern(answer.name, answer.id, answer.email. answer.school)
        team.push(intern);

        employeeInformation()
    })
};


function generateHTML(FileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err){
        if (err) {
            throw err;
        }
        console.log("You have successfully written your Employee Summary");
    });
};

employeeInformation();