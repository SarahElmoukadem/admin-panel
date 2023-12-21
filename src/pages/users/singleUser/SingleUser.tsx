import { useEffect, useState } from 'react';
import './singleUser.scss';
import axios from 'axios';
import { UsersInfo } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
  const [data, setData] = useState<UsersInfo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://dummyjson.com/users/${id}`);
      setData(result.data);

    };

    fetchData();


  }, [data]);


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='single-page'>
        id: <p> {data.id} </p>
        firstName: <p> {data.firstName} </p>
        email:  <p> {data.email} </p>
        username:  <p> {data.username} </p>
        phone:  <p> {data.phone} </p>
        height:  <p> {data.height} </p>

      </div>
    </div>
  );
};

export default SingleUser;
