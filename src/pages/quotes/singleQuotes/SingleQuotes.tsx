import { useEffect, useState } from 'react';
import './singleQuotes.scss';
import axios from 'axios';
import { QuoteInfo } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';

const SingleQuotes = () => {
  const [data, setData] = useState<QuoteInfo | null>(null);
  const { id } = useParams();


  const fetchData = async () => {
    try{
      const result = await axios(`https://dummyjson.com/quotes/${id}`);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
      quote: <p> {data.quote} </p>
      author:  <p> {data.author} </p>

    </div>
  );
};

export default SingleQuotes;
