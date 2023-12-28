import { GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { QuoteInfo } from '../../interfaces/interface';
import Add from '../../components/add/Add';
import QuotesDataTable from '../../components/dataTables/quotesDataTable/QuotesDataTable';

const Quotes = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'quote',
      headerName: 'Quote',
      width: 350,
      editable: false,
      type: 'string'
    },
    {
      field: 'author',
      headerName: 'Author',
      type: 'string',
      width: 150,
      editable: false,
    }
  ];

  const [data, setData] = useState<QuoteInfo[] | null>(null);
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [skip, setSkip] = useState(0);

  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/quotes?skip=${skip}&limit=${limit}`);
      const initialData = result.data.quotes;
      const count = result.data.total;
      setTotalCount(count)
      setData(initialData);
      setLimit(totalCount);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage:number) => {
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
    <div>
      <div className='main-info'>
        <h3>
          Quotes
        </h3>
        {/* <button onClick={() => setOpen(true)}>
        Add new
      </button> */}
      </div>

      <QuotesDataTable 
      columns={columns} rows={data} slug='posts'
      pageSize={limit}
      onPageChange={handlePageChange}
      
      />

      {open && <Add setOpen={setOpen} columns={columns} slug='quotes' />}

    </div>
  )
}

export default Quotes