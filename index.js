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
}

// Function to show Version B and hide Version A
function showVersionB() {
    versionAContainer.style.display = 'none';
    versionBContainer.style.display = 'block';
    console.log('Version B displayed');
}

// Event listeners for buttons
versionAButton.addEventListener('click', showVersionA);
versionBButton.addEventListener('click', showVersionB);

// Chart.js setup
const ctx = document.getElementById('performanceChart').getContext('2d');

const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Click-Through Rate (CTR)', 'Conversion Rate'],
        datasets: [
            {
                label: 'Version A (With Brand)',
                data: [7, 4], // Corresponding data for Version A
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Version B (Without Brand)',
                data: [5, 3], // Corresponding data for Version B
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentage (%)'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});
