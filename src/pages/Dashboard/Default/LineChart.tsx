import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface DataPoint {
    month: string;
    totalRevenue: number;
    forecastRevenue: number;
}

const data: DataPoint[] = [
    { month: "Jan", totalRevenue: 2000, forecastRevenue: 1000 },
    { month: "Feb", totalRevenue: 1500, forecastRevenue: 1200 },
    { month: "Mar", totalRevenue: 1600, forecastRevenue: 1300 },
    { month: "Apr", totalRevenue: 1400, forecastRevenue: 1350 },
    { month: "May", totalRevenue: 1800, forecastRevenue: 1500 },
    { month: "Jun", totalRevenue: 2200, forecastRevenue: 1600 },
    { month: "Jul", totalRevenue: 2500, forecastRevenue: 1700 },
    { month: "Aug", totalRevenue: 2300, forecastRevenue: 1750 },
    { month: "Sep", totalRevenue: 3500, forecastRevenue: 2000 },
    { month: "Oct", totalRevenue: 3000, forecastRevenue: 1800 },
    { month: "Nov", totalRevenue: 2800, forecastRevenue: 1900 },
    { month: "Dec", totalRevenue: 3200, forecastRevenue: 2100 },
];

const RevenueChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={500}>
        <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[500, 4000]} tickCount={8} />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="totalRevenue"
                stroke="#4a90e2"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
            />
            <Line
                type="monotone"
                dataKey="forecastRevenue"
                stroke="#999"
                strokeDasharray="5 5"
                dot={{ r: 3 }}
            />
        </LineChart>
    </ResponsiveContainer>
);

export default RevenueChart;
