import axios from "axios";
import { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";


const TotalCartsBlock = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/carts');
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
            <FaCartShopping />
            </div>

            <div>
                <p className="green">
                     carts 
                </p>
                <h4>
                    {data}
                </h4>
            </div>

        </div>
    )
}

export default TotalCartsBlock