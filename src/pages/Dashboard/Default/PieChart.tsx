import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PieChart: React.FC = () => {
    const chartOptions: ApexOptions = {
        chart: {
            type: "donut",
        },
        labels: ["Social", "Search Engines", "Direct", "Others"],
        colors: ["#4781dd", "#f44134", "#fd9600", "#eeeeee"],
        title: {
            align: "center",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "80%", 
                },
            },
        },
    };

    const series: number[] = [45, 25, 13, 33]; 

    return (
        <div>
            <Chart
                options={chartOptions}
                series={series}
                type="donut"
                width="380"
            />
        </div>
    );
};

export default PieChart;
