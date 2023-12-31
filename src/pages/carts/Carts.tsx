import { GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Add from '../../components/add/Add';
import { CartsInfo } from '../../interfaces/interface';
import CartsDataTable from '../../components/dataTables/cartsDataTable/CartsDataTable';

const Carts = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'total',
      headerName: 'total',
      width: 150,
      editable: false,
      type: 'string'
    },
    {
      field: 'discountedTotal',
      headerName: 'Discounted Total',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'userId',
      headerName: 'userId',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'totalProducts',
      headerName: 'total Products',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'totalQuantity',
      headerName: 'total Quantity',
      type: 'number',
      width: 150,
      editable: false,
    }
  ];

  const [data, setData] = useState<CartsInfo[] | null>(null);
  const [open, setOpen] = useState(false);
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(0);


  const fetchData = async () => {
    try {
      const result = await axios('https://dummyjson.com/carts');
      const initialData = result.data.carts
      const count = result.data.total 
      setTotalCount(count);
      setData(initialData);
      setLimit(totalCount)
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
    <div>
    <div className='main-info'>
      <h3>
        Carts
      </h3>
      {/* <button onClick={() => setOpen(true)}>
    Add new
  </button> */}
    </div>

    <CartsDataTable 
    columns={columns} 
    rows={data} 
    slug='carts'
    pageSize={limit}
    onPageChange={handlePageChange}
     />

    {open && <Add setOpen={setOpen} columns={columns} slug='carts' />}

  </div>
  )
}

export default Carts