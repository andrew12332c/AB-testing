// Select the buttons for switching between versions
const versionAButton = document.getElementById('version-a-btn');
const versionBButton = document.getElementById('version-b-btn');

// Select the containers for Version A and Version B
const versionAContainer = document.getElementById('version-a');
const versionBContainer = document.getElementById('version-b');

// Function to show Version A and hide Version B
function showVersionA() {
  versionAContainer.style.display = 'block';
  versionBContainer.style.display = 'none';
  console.log('Version A displayed');
  // You can add logic here to track clicks or interactions for Version A
}

// Function to show Version B and hide Version A
function showVersionB() {
  versionAContainer.style.display = 'none';
  versionBContainer.style.display = 'block';
  console.log('Version B displayed');
  // You can add logic here to track clicks or interactions for Version B
}

// Event listeners for buttons
versionAButton.addEventListener('click', showVersionA);
versionBButton.addEventListener('click', showVersionB);

// Optional: Set the initial view to show Version A by default
window.onload = function() {
  showVersionA();
};
