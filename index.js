// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
function renderLicenseBadge (license,myname){
  let licensestring = ""
  if(license === "MIT") {
    licensestring = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "APACHE") {
    licensestring = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

return licensestring;
}

const renderTemplate = ({ title, description, installation, contribution, usage, test, license }) => {
 //let licensebadge = await renderLicenseBadge(license, "Iva")
 return `
  ## Table of Contents
  1. [Title](#Title)

  ## Title: 

  - ${title}

  ## License

  - ${renderLicenseBadge(license, "Iva")}
  `;
}


function GenerateReadMe(){
  inquirer
  .prompt([
{
    type: 'input',
    message: 'What is the title of you project',
    name: 'title'
}, 
{ type: 'input',
    message: 'What is the Description for your project?',
    name: 'description'
},
    { type: 'input',
    message: 'What are the installation instructions for your project?',
    name: 'installtion',
},
    { type: 'input',
    message: 'Contribution guidelines for your project?',
    name: 'contribution',
},
    { type: 'input',
    message: 'Usage of your project?',
    name: 'usage',
},
    { type: 'input',
    message: 'Tests for your project?',
    name: 'test'
},


{
  type: 'list',
  message:'Select license Badge:',
  name: 'license', 
  choices: ["MIT", "APACHE"]

}
])

// TODO: Create a function to write README file
.then((answers) => {
  console.log(answers)
    const htmlPageContent = renderTemplate(answers);

    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md')
    );
  });  
}

//Create a function to initialize app
function init() {
GenerateReadMe()
}

// Function call to initialize app
init();
