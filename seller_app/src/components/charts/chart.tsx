// ChartComponent.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

// Registering the necessary components for Chart.js
ChartJS.register(...registerables);

const ChartComponent: React.FC = () => {
    // Sample data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.5,
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        scales: {
            y: {
                grid: {
                    borderColor: 'rgba(75, 192, 192, 1)', // Optional: Change x-axis border color
                    borderDash: [5, 5], // Makes the x-axis grid lines dashed
                    
                },
            },
            x: {
                grid: {
                    display: false, // Hides the y-axis grid lines
                },
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    return (
            <Line data={data} options={options} />
    );
};

export default ChartComponent;
