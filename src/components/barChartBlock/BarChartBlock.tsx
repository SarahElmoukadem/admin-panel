import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

interface Product {
    id: number;
    age: number;
    height: number;
    weight: number;
    firstName: string;

}

const BarChartBlock = () => {

    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/users');
                setData(result.data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    if (!data) {
        return <div>Loading...</div>;
    }



    return (
        <div className="chart-container">

            <h2>
                RealTime Users Info
            </h2>

            <div className="charts">

                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <XAxis dataKey="firstName" scale="band" />
                        <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }} />
                        {/* <Legend /> */}
                        <Area type="monotone" dataKey="age" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="weight" barSize={10} fill="#413ea0" />
                        <Line type="monotone" dataKey="height" stroke="#ff7300" />
                        <Scatter dataKey="age" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBlock

