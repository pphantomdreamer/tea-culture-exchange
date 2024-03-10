const { registerProject } = require('tea-demo-arsen');

console.log("Starting tea-culture-exchange project...");

const projectInfo = {
    name: "Global Tea Culture Exchange",
    repositoryUrl: "https://github.com/culture/tea-culture-exchange"
};

// Registering the project focused on cultural exchange
const projectId = registerProject(projectInfo);

console.log(`Tea-culture-exchange project registered. Promoting global tea culture.`);
