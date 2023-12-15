

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const LineChartBlock = () => {

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
  const highestDiscountProduct = data.reduce((prev, current) => {
    return (prev.discountPercentage > current.discountPercentage) ? prev : current;
  });

  const highestStockProduct = data.reduce((prev, current) => {
    return (prev.stock > current.stock) ? prev : current;
  });

  return (

    <div className="chart-container">

      <h3>
      discount Percentage
      </h3>

      <div className='charts'>
        <ResponsiveContainer width="99%" height={250}>

          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <XAxis dataKey="title" />
            <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="discountPercentage"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="stock" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <p>Highest stock: {highestStockProduct.stock}</p>
        <p> Discount: {highestStockProduct.discountPercentage}</p>

      </div>
    </div>
  );
}

export default LineChartBlock

