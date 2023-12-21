
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';

const AreaChartBlock = () => {

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
                online reactions
            </h4>
            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >

                        <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }} />
                        <Area type="monotone" dataKey="reactions" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AreaChartBlock
