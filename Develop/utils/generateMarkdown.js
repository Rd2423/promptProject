// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(!license.license){
//     return ``
//   }
//   return `
//  [![Github license](https://img.shields.io/badge/license-MIT-blue.svg)]`

//   }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// `
//   Begin license text.
// Copyright 2021 ${data.username}

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// End license text.`

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   `
//   ${renderLicenseLink(license)}
//   ${renderLicenseBadge(license)}
//   `

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.repo}
  # Description
  ${data.description}
  # Table of Contents
  * Installation 
  * usage
  * Contributing
  * Tests
  * Questions
  
  

  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.installation}


  # Usage
  This application is used for ${data.usage}


  # License

  Copyright 2021 ${data.username}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  # Contributors
  
  Contributors: ${data.contributor}
 
  
`;
}

module.exports = generateMarkdown;
