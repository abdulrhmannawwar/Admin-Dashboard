import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

interface BarchartProps {
    width: number;
}
const Barchart: React.FC<BarchartProps> = ({ width }) => {
    return (
        <BarChart
            xAxis={[
                {
                    scaleType: "band",
                    data: [
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
            ]}
            yAxis={[
                {
                    scaleType: "linear",
                    min: 0,
                    max: 160,
                },
            ]}
            series={[
                {
                    data: [
                        120, 130, 60, 100, 90, 100, 120, 130, 60, 100, 90, 100,
                    ],
                    color: "#4582d8",
                },
            ]}
            width={width}
            height={400}
        />
    );
};

export default Barchart;
