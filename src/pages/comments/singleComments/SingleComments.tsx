import { useEffect, useState } from 'react';
import './singleComment.scss';
import axios from 'axios';
import { CommentsInfo } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';

const SingleComments = () => {
  const [data, setData] = useState<CommentsInfo | null>(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/comments/${id}`);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='single-page'>
        id: <p> {data.id} </p>
        firstName: <p> {data.body} </p>
        email:  <p> {data.postId} </p>
        username:  <p> {data.user.id} </p>
        phone:  <p> {data.user.username} </p>

      </div>
    </div>
  );
};

export default SingleComments;
