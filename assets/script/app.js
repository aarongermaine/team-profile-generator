const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "team",
      message: "What is the name of your team?",
    },
    {
      type: "input",
      name: "manager",
      message: "Please enter the team manager's name: ",
    },
    {
      type: "input",
      name: "id1",
      message: "Please enter the manager's ID: ",
    },
    {
      type: "input",
      name: "email1",
      message: "Please enter the manager's email: ",
    },
    {
      type: "input",
      name: "phone1",
      message: "Please enter the manager's phone number: ",
    },
    {
      type: "checkbox",
      message: "Add an Engineer or an Intern? or Finish?",
      name: "eif",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ]);
};
