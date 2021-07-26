// TODO: Include packages needed for this application

const path = require("path");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
function askQuestion() {
  const answers = [];

  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Whats your github username (required)",
      },
      {
        type: "input",
        name: "repo",
        message: "What is the title of the Project (required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the title of your project ");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmDescription",
        message: "Would you like to enter a description of your project",
        default: false,
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
        when: ({ confirmDescription }) => {
          if (confirmDescription) {
            return true;
          } else {
            return "";
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message:
          "Provide a step-by-step description of how to get the development environment running. ",
        validate: (installationSteps) => {
          if (installationSteps) {
            return true;
          } else {
            console.log("What are the steps required to install your project?");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message:
          "Provide instructions and examples for use. Include screeshots.",
        validation: (usageP) => {
          if (usageP) {
            return true;
          } else {
            console.log(
              "You need to provide instructions and examples for use."
            );
          }
        },
      },
      {
        type: "input",
        name: "license",
        message:
          "Please provide your license. If you dont have one go checkout mitlicense",
        // validate: licenseChoice => {
        //   if(licenseChoice) {
        //     return true;
        //   } else{
        //     return false
        //   }
        // }
      },
      {
        type: "confirm",
        name: "contributerConfirmation",
        message: "Is there any contributer to this project",
      },
      {
        type: "input",
        name: "contributor",
        message: "Enter the contributer to this project",
        validate: (contributerConfirmation) => {
          if (contributerConfirmation === "") {
            console.log("What are the steps required to install your project?");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((responses) => {
      console.log(responses);
      const newMarkDown = markDown(responses);
      console.log(newMarkDown);
      writeToFile("readme.md", newMarkDown);
      // const data = [];
      // data.push(responses).then(data => {
      //   return markDown(data);
      // })
    });
}

// TODO: Create a function to write README file
// function writeReadMe (filename, data) {
//   // const pageReadMe = markDown(readme)
//   fs.writeToFile("./ReadMe/readme.md", filename, function(err){
//     if(err) {
//       console.log(err);
//     }
//     console.log('File created')
//   })
// }

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  askQuestion();
  // const allanswers = askQuestion;
  // writeReadMe(readmeAnswers)
}
// function writeFile(){
//   writeReadMe();
// }
// Function call to initialize app
init();
// module.exports = index;
