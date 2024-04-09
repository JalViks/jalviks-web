import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Tables } from './Tables';

export const About = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Sample data
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const averages = [10, 12, 15, 8, 11, 14, 13, 15, 18, 20, 19, 17];
        const deviations = [-2, -3, 1, 2, 2, 3, 2, 1, -3, 4, 3, -2];


        // Destroy existing chart if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Creating chart
        const ctx = document.getElementById('rainfallChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Average Rainfall',
                        data: averages,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Rainfall Deviation',
                        data: deviations,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return (

        <>
        
        <h1 className="text-center mt-2">Rainfall Dashboard</h1>

        
        <div className="container">
    <div className="row">
        <div className="col-md-4"></div> 

        <div className="col-md-8">

            <Tables />
            <canvas id="rainfallChart"></canvas>
        </div>
    </div>
</div>


        </>


    );
};

export default About;
