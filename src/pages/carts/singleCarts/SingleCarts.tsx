import { useEffect, useState } from 'react';
import './singleCarts.scss';
import axios from 'axios';
import { CartsInfo } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';

const SingleCarts = () => {
  const [data, setData] = useState<CartsInfo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://dummyjson.com/carts/${id}`);
      setData(result.data);

    };

    fetchData();


  }, [data]);


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single-page'>
      id: <p> {data.id} </p>
      discounted Total: <p> {data.discountedTotal} </p>
      total:  <p> {data.total} </p>
      user Id:  <p> {data.userId} </p>
      total Products:  <p> {data.totalProducts} </p>
      total Quantity:  <p> {data.totalQuantity} </p>
    </div>
  );
};

export default SingleCarts;
