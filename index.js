const { registerProject } = require('tea-demo-arsen');

console.log("Starting tea-culture-exchange project...");

const projectInfo = {
    name: "Global Tea Culture Exchange",
    repositoryUrl: "https://github.com/culture/tea-culture-exchange"
};

// Registering the project focused on cultural exchange
const projectId = registerProject(projectInfo);

console.log(`Tea-culture-exchange project registered. Promoting global tea culture.`);

// Example data for tea types and their origins
const teas = [
    { name: "Matcha", origin: "Japan", type: "Green" },
    { name: "Darjeeling", origin: "India", type: "Black" },
    { name: "Oolong", origin: "China", type: "Oolong" },
    { name: "Rooibos", origin: "South Africa", type: "Herbal" },
];

// Function to list all tea types
function listTeaTypes() {
    console.log("Listing all tea types:");
    teas.forEach(tea => console.log(`${tea.name} (${tea.type}) from ${tea.origin}`));
}

// Function to find teas by origin
function findTeaByOrigin(origin) {
    console.log(`Finding teas from ${origin}:`);
    const teasFromOrigin = teas.filter(tea => tea.origin === origin);
    teasFromOrigin.forEach(tea => console.log(`${tea.name} (${tea.type})`));
}

// Example usage
listTeaTypes();
findTeaByOrigin("India");
