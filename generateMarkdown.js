// generateMarkdown.js

function generateMarkdown(data) {
  function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `[![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(license)})`;
    }
    return '';
  }

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Walkthrough Video](#walkthrough-video)
- [Code Source](#code-source)

## Installation

\`\`\`bash
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${data.license !== 'None' ? `This project is licensed under the [${data.license}](https://opensource.org/licenses/${encodeURIComponent(data.license)}) license.` : 'This project does not have a license.'}

## Contributing

${data.contributing}

## Tests

\`\`\`bash
${data.tests}
\`\`\`

## Questions

If you have any questions about the project, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

## Walkthrough Video

[Watch the walkthrough video here](${data.videoLink})

## Code Source

All source code for this project is located in the following files:

- \`index.js\`: Main application logic and user prompts.
- \`generateMarkdown.js\`: Functions to format user input into Markdown.
- \`package.json\`: Project dependencies and scripts.
`;
}

module.exports = generateMarkdown;
