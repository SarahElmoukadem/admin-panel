import { useEffect, useState } from 'react';
import './singlePosts.scss';
import axios from 'axios';
import { PostInfo } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';

const SinglePosts = () => {
  const [data, setData] = useState<PostInfo | null>(null);
  const { id } = useParams();
  const fetchData = async () => {
    try{
      const result = await axios(`https://dummyjson.com/posts/${id}`);
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
    <div className='single-page'>
      id: <p> {data.id} </p>
      title: <p> {data.title} </p>
      body:  <p> {data.body} </p>
      userId:  <p> {data.userId} </p>
      tags:  <p> {data.tags} </p>
      reactions:  <p> {data.reactions} </p>

    </div>
  );
};

export default SinglePosts;
