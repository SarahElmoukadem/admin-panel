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
      editable: true,
      type: 'string'
    },
    {
      field: 'completed',
      headerName: 'completed',
      type: 'boolean',
      width: 150,
      editable: true,
    },
    {
      field: 'userId',
      headerName: 'user Id',
      type: 'number',
      width: 150,
      editable: true,
    }
  ];
  
  const [data, setData] = useState<Todo[] | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://dummyjson.com/todos');
        setData(result.data.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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

      <TodosDataTable columns={columns} rows={data} slug='todos' />

      {open && <Add setOpen={setOpen} columns={columns} slug='todos'/>}

    </div>
  )
}

export default Todos