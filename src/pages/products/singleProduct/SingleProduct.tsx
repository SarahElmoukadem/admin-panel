import { useEffect, useState } from 'react';
import './singleProduct.scss';
import axios from 'axios';
import { Product } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [data, setData] = useState<Product | null>(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/products/${id}`);
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
      title: <p> {data.title} </p>
      description:  <p> {data.description} </p>
      Price:  <p> {data.price} </p>
      Stock:  <p> {data.stock} </p>
      discount Percentage:  <p> {data.discountPercentage} </p>

    </div>
  );
};

export default SingleProduct;
