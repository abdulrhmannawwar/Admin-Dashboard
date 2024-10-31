import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ApexChart = () => {
    const [series] = useState([
        {
            name: "Sales",
            data: [50, 70, 40, 55, 65, 40, 50, 70, 55, 65, 40, 50],
        },
        {
            name: "Revenue",
            data: [70, 65, 20, 45, 50, 50, 35, 50, 57, 67, 42, 45],
        },
    ]);

    const [options] = useState<ApexOptions>({
        chart: {
            type: "bar",
            height: 350,
            width: 100,
        },
        colors: ["#4781dd", "#eeeeee"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            max: 80,
            min: 0,
            stepSize: 10,
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return "$ " + val + " thousands";
                },
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={400}
                    width={750}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
