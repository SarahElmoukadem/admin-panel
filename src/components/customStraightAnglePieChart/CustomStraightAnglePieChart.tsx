
import {  ResponsiveContainer, Line, LineChart, Tooltip  } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';


const CustomStraightAnglePieChart = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/carts');
                setData(result.data.carts);
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

            <h4>
                Products in Cart 
            </h4>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">

                    <LineChart width={300} height={100} data={data}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" strokeWidth={1} />

                        <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }} />

                    </LineChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default CustomStraightAnglePieChart
