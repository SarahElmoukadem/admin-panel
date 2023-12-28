import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../interfaces/interface';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Add from '../../components/add/Add';
import ProductsDataTable from '../../components/dataTables/productsDataTable/ProductsDataTable';



const Products = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
      type: 'string',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.category || ''} ${params.row.title || ''}`,
    },
    {
      field: 'description',
      headerName: 'description',
      type: 'string',
      width: 150,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'price',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'discountPercentage',
      headerName: 'Discount Percentage',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'rating',
      headerName: 'rating',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'stock',
      headerName: 'stock',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'brand',
      headerName: 'brand',
      type: 'string',
      width: 110,
      editable: false,
    },
    {
      field: 'category',
      headerName: 'category',
      type: 'string',
      width: 110,
      editable: false,
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
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(0);
  const [totalCount, setTotalCount] = useState(0)



  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
      setData(result.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage: number) => {
    const newSkip = (newPage - 1) * limit;
    setSkip(newSkip);
    fetchData();
  }

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
          Products
        </h3>
        {/* <button onClick={() => setOpen(true)}>
          Add new
        </button> */}
      </div>

      <ProductsDataTable
       columns={columns}
       rows={data}
       slug='products'
       pageSize={limit}
       onPageChange={handlePageChange}
       />

      {open && <Add setOpen={setOpen} columns={columns} slug='product' />}

    </div>
  );
};

export default Products;
