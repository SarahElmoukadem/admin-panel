import axios from "axios";
import { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";


const TotalPostsBlock = () => {
    const [data, setData] = useState();
    const [commentsData, setCommentsData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://dummyjson.com/posts');
                const commentsResult = await axios('https://dummyjson.com/comments');
                setData(result.data.total);
                setCommentsData(commentsResult.data.total)
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
            <FaRegCommentDots />
            </div>
            <div>
                <p className="blue">
                     comments
                </p>
                <h4>
                    {commentsData}
                </h4>
            </div>
            {/* <p>
    Total Posts Block 
    </p>

    <h4>
    {data} 
    </h4> */}
        </div>
    )
}

export default TotalPostsBlock