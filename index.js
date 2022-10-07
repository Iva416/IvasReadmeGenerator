// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
{
    type: 'What is the title of you project',
    message: '',
    name: 'Title',
}, 
{ type: 'What is the Description for your project?',
    message: '',
    name: 'Description',
},
    { type: 'What are the installation instructions for your project?',
    message: '',
    name: 'Installtion',
},
    { type: 'Contribution guidelines for your project?',
    message: '',
    name: 'Contribution',
},
    { type: 'Usage of your project?',
    message: '',
    name: 'Usage',
},
    { type: 'Tests for your project?',
    message: '',
    name: 'Test'
}
])

// TODO: Create a function to write README file
.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
