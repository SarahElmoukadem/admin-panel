import { useEffect, useState } from 'react';
import './singleTodos.scss';
import axios from 'axios';
import { Todo } from '../../../interfaces/interface';
import { useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

const SingleTodos = () => {
  const [data, setData] = useState<Todo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://dummyjson.com/todos/${id}`);
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
      completed:  <p> {data.completed ? <FaCheck /> : <CiTimer/>}  </p>
      todo:  <p> {data.todo} </p>
      user Id:  <p> {data.userId} </p>

    </div>
  );
};

export default SingleTodos;
