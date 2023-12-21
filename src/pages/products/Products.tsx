import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../interfaces/interface';
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Add from '../../components/add/Add';



const Products = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
      type: 'string',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.category || ''} ${params.row.title || ''}`,
    },
    {
      field: 'description',
      headerName: 'description',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'discountPercentage',
      headerName: 'Discount Percentage',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'rating',
      headerName: 'rating',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'stock',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'brand',
      headerName: 'brand',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'category',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'thumbnail',
      headerName: 'thumbnail',
      type: 'string',
      width: 110,
      editable: false,
      renderCell: (params) => {
        return <img src={params.row.thumbnail} alt="" /> || ' '
      }
    }
  ];
  
  const [data, setData] = useState<Product[] | null>(null);
  const [open, setOpen] = useState(false);

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
    <div className='products'>
      <div className='main-info'>
        <h3>
          Products
        </h3>
        {/* <button onClick={() => setOpen(true)}>
          Add new
        </button> */}
      </div>

      <DataTable columns={columns} rows={data} slug='products' />

      {open && <Add setOpen={setOpen} columns={columns} slug='product'/>}

    </div>
  );
};

export default Products;
