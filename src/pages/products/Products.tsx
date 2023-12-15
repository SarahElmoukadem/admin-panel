import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../interfaces/interface';

const Products = () => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://dummyjson.com/products');
        setData(result.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Check if data is an array before mapping
  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h4>

          {item.title}
          </h4>

          <p>
            {item.description}
          </p>

          <p>
            {item.price}
          </p>
          <p>
            {item.discountPercentage}
          </p>
          <hr/>
          </div>

      ))}
    </div>
  );
};

export default Products;
