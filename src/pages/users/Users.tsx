import { GridColDef } from '@mui/x-data-grid';
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
      editable: false,
      type: 'string'
    },
    {
      field: 'age',
      headerName: 'age',
      type: 'number',
      width: 50,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'email',
      type: 'string',
      width: 110,
      editable: false,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'height',
      headerName: 'height',
      type: 'number',
      width: 60,
      editable: false,
    },
    {
      field: 'weight',
      headerName: 'weight',
      type: 'number',
      width: 60,
      editable: false,
    },
    {
      field: 'university',
      headerName: 'University',
      type: 'string',
      width: 110,
      editable: false,
    },
    {
      field: 'domain',
      headerName: 'domain',
      type: 'string',
      width: 110,
      editable: false,
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
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(0);

  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/users?skip=${skip}&limit=${limit}`);
      const initialData = result.data.users
      const count = result.data.total 
      setTotalCount(count);
      setData(initialData);
      setLimit(totalCount)
      console.log(count);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage: number) => {
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
          Users
        </h3>
        {/* <button onClick={() => setOpen(true)}>
          Add new
        </button> */}
      </div>

      <UsersDataTable columns={columns} rows={data} slug='users'
        pageSize={limit}
        onPageChange={handlePageChange}


      />

      {open && <Add setOpen={setOpen} columns={columns} slug='user' />}
    
    </div>
  )
}

export default Users