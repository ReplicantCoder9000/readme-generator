// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
    validate: (input) => input ? true : 'Project title cannot be empty.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description:',
    validate: (input) => input ? true : 'Description cannot be empty.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
    validate: (input) => input ? true : 'Usage information cannot be empty.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
    default: 'Contributions are welcome! Please fork the repository and submit pull requests for enhancements.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: (input) => input ? true : 'GitHub username cannot be empty.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: (input) => {
      const valid = /\S+@\S+\.\S+/.test(input);
      return valid ? true : 'Please enter a valid email address.';
    },
  },
  {
    type: 'input',
    name: 'videoLink',
    message: 'Enter the URL to your walkthrough video:',
    validate: (input) => {
      const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(input);
      return valid ? true : 'Please enter a valid URL.';
    },
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  console.log('Initializing ReadMePro...');
  inquirer.prompt(questions)
    .then((answers) => {
      console.log('Generating README.md...');
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
      console.log('Successfully created README.md');
    })
    .catch((error) => {
      console.error('Error generating README.md:', error);
    });
}

// Function call to initialize app
init();
