import axios from "axios";
import { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";


const TotalProductsBlock = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/products');
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
            <HiOutlineShoppingBag />
            </div>

            <div>
                <p className="light-purple">
                     products 
                </p>
                <h4>
                    {data}
                </h4>
            </div>


        </div>
    )
}

export default TotalProductsBlock