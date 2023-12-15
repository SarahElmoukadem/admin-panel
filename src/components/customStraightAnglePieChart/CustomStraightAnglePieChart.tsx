
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Line, LineChart, AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';


const CustomStraightAnglePieChart = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/posts');
                setData(result.data.posts);
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
                Online Users 
            </h4>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">

                    <LineChart width={300} height={100} data={data}>
                        <Line type="monotone" dataKey="userId" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default CustomStraightAnglePieChart
