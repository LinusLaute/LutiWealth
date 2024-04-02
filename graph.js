// graph.js

// data for the performance graph
const dates = [
    "15.11.2022", "17.11.2022", "18.11.2022", "19.11.2022", "21.11.2022",
    "22.11.2022", "23.11.2022", "28.11.2022", "05.12.2022", "08.12.2022",
    "13.12.2022", "19.12.2022", "22.12.2022", "26.12.2022", "08.01.2023",
    "15.01.2023", "25.01.2023", "01.02.2023", "15.02.2023", "06.03.2023",
    "08.03.2023", "16.03.2023", "21.03.2023", "22.03.2023", "02.04.2023",
    "08.04.2023", "13.04.2023", "15.04.2023", "18.04.2023", "19.04.2023",
    "26.04.2023", "03.05.2023", "11.05.2023", "27.05.2023", "16.06.2023",
    "22.06.2023", "05.07.2023", "23.07.2023", "01.08.2023", "07.08.2023", 
    "11.08.2023", "19.08.2023", "22.08.2023", "01.09.2023", "04.09.2023",
    "14.09.2023", "29.09.2023", "07.10.2023", "23.10.2023", "12.11.2023",
    "03.03.2024", "18.03.2024", "02.04.2023"
];

const prices = [
    31.39, 32.12, 32.54, 38.30, 38.10, 41.00, 39.76, 33.50, 35.80, 36.05,
    36.52, 36.50, 37.65, 34.74, 34.66, 36.20, 38.40, 38.90, 43.30, 44.05,
    54.00, 48.40, 57.00, 70.50, 66.80, 81.40, 87.00, 95.40, 115.00, 138.00,
    118.00, 104.00, 101.00, 105.00, 104.00, 103.00, 96.00, 93.00,98.00, 102.5,
    101.8, 107.5, 116.8, 125,129.4, 131, 125, 121, 102, 114, 150, 159, 164
];

const performanceData = {
    labels: dates,
    datasets: [{
        label: "Performance",
        data: prices,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
    }]
};

// Create a new Chart instance when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById("performanceChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: performanceData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 180 // Set the maximum value for the Y-axis
                }
            },
            responsive: true, // Enable responsive mode
            maintainAspectRatio: false // Allow the chart to adjust its width freely
        }
    });
});