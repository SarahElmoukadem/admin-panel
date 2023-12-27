import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Todo } from '../../interfaces/interface';
import TodosDataTable from '../../components/dataTables/todosDataTable/TodosDataTable';
import Add from '../../components/add/Add';

const Todos = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'todo',
      headerName: 'Todo',
      width: 150,
      editable: false,
      type: 'string'
    },
    {
      field: 'completed',
      headerName: 'completed',
      type: 'boolean',
      width: 150,
      editable: false,
    },
    {
      field: 'userId',
      headerName: 'user Id',
      type: 'number',
      width: 150,
      editable: false,
    }
  ];

  const [data, setData] = useState<Todo[] | null>(null);
  const [open, setOpen] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/todos?skip=${skip}&limit=${limit}`);
      const initialData = result.data.todos
      const count = result.data.total
      setLimit(totalCount);
      setTotalCount(count);
      setData(initialData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage:number) => {
    const newSkip = (newPage - 1) * limit;
    setSkip(newSkip);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <div>Error loading data</div>;
  }


  return (
    <div className='products'>
      <div className='main-info'>
        <h3>
          Todos
        </h3>
        {/* <button onClick={() => setOpen(true)}>
          Add new
        </button> */}
      </div>

      <TodosDataTable 
      columns={columns} 
      rows={data} 
      slug='todos'
      pageSize={limit}
      onPageChange={handlePageChange}
       />

      {open && <Add setOpen={setOpen} columns={columns} slug='todos' />}

    </div>
  )
}

export default Todos