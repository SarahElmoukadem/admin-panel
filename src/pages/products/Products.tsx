import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../interfaces/interface';
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const Products = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.category || ''} ${params.row.title || ''}`,
    },
    {
      field: 'description',
      headerName: 'description',
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
      width: 110,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'category',
      width: 110,
      editable: true,
    },
    {
      field: 'thumbnail',
      headerName: 'thumbnail',
      width: 110,
      editable: false,
      renderCell: (params) => {
        return <img src={params.row.thumbnail} alt="" /> || ' '
      }
    },
    // {
    //   field: 'images',
    //   headerName: 'images',
    //   width: 110,
    //   editable: true,
    //   renderCell: (params) => {
    //     return <img src={params.row.images} alt="" />
    //   }
    // }
  ];



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
    <div className='products'>
      <div className='main-info'>
        <h3>
          Products
        </h3>
        <button>
          Add new
        </button>
      </div>

      <DataTable columns={columns} rows={data} slug='products' />

    </div>
  );
};

export default Products;
