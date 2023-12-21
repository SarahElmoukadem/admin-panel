import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UsersInfo } from '../../interfaces/interface';
import Add from '../../components/add/Add';
import UsersDataTable from '../../components/dataTables/usersDataTable/UsersDataTable';

const Users = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      editable: true,
      type: 'string',
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.category || ''} ${params.row.title || ''}`,
    },
    {
      field: 'age',
      headerName: 'age',
      type: 'number',
      width: 50,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'height',
      headerName: 'height',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'weight',
      headerName: 'weight',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'university',
      headerName: 'University',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'domain',
      headerName: 'domain',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'image',
      headerName: 'Image',
      type: 'string',
      width: 110,
      editable: false,
      renderCell: (params) => {
        return <img src={params.row.image} alt="" /> || ' '
      }
    }
  ];
  
  const [data, setData] = useState<UsersInfo[] | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://dummyjson.com/users');
        setData(result.data.users);
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
          Users
        </h3>
        {/* <button onClick={() => setOpen(true)}>
          Add new
        </button> */}
      </div>

      <UsersDataTable columns={columns} rows={data} slug='users' />

      {open && <Add setOpen={setOpen} columns={columns} slug='user'/>}

    </div>
  )
}

export default Users