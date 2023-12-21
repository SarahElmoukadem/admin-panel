import { useEffect, useState } from 'react';
import './singleProduct.scss';
import axios from 'axios';
import { Product } from '../../interfaces/interface';
import Single from '../../components/single/Single';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [data, setData] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://dummyjson.com/products/${id}`);
      setData(result.data);

    };

    fetchData();


  }, [data]);


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Single {...data} />
    </div>
  );
};

export default SingleProduct;
