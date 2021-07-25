// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const markDown = require('./utils/generateMarkdown');
const fs = require("fs");


// TODO: Create an array of questions for user input
// function askQuestion(){


const promptUser = 
  [
    {
      type:'input',
      name: 'username',
      message: 'Whats your github username (required)'
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the title of the Project (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of your project ");
          return false;
        }
      },
    },
    {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like to enter a description of your project',
      default: false,
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project',
      when: ({ confirmDescription }) => {
        if (confirmDescription) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'installation',
      message:
        'Provide a step-by-step description of how to get the development environment running. ',
      validate: installationSteps => {
        if (installationSteps) {
          return true;
        } else {
          console.log("What are the steps required to install your project?");
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screeshots.',
        validation: usageP => {
            if(usageP) {
                return true;
            }else {
                console.log('You need to provide instructions and examples for use.')
            }
        }
    },
    {
      type: 'confirm',
      name: 'license',
      message: 'Would you like to be provided with a license',
      validate: licenseChoice => {
        if(licenseChoice) {
          return true;
        } else{
          return false
        }
      }
    }
  ]

  




// TODO: Create a function to write README file
function writeReadMe (file, data) {
  // const pageReadMe = markDown(readme)
  fs.writeToFile(file, data, function(err){
    if(err) {
      return console.log(err);
    }
    console.log('Heres your portfolio');
  }) 
} 


// TODO: Create a function to initialize app
function init() {
  // askQuestion()
  inquirer.prompt(promptUser).then(inquirerReponses => console.log(inquirerReponses))
  // .then(function(data){
  //   writeToFile(markDown(data));
  // });
}

// Function call to initialize app
init();
module.exports = index;