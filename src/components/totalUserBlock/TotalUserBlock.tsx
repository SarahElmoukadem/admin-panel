import axios from "axios";
import { useState, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";


const TotalUserBlock = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/users');
                setData(result.data.total);
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
        <div className="totalBlocks">

            <div className="icon">
            <FaUserFriends />
            </div>

            <div>
                <p className="green">
                     Users 
                </p>
                <h4>
                    {data}
                </h4>
            </div>
        </div>
    )
}

export default TotalUserBlock