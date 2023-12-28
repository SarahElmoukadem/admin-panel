import { GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CommentsInfo } from '../../interfaces/interface';
import CommentsDataTable from '../../components/dataTables/commentsDataTable/CommentsDataTable';
import Add from '../../components/add/Add';

const Comments = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'body',
      headerName: 'body',
      width: 450,
      editable: false,
      type: 'string'
    },
    {
      field: 'postId',
      headerName: 'Post Id',
      type: 'number',
      width: 250,
      editable: false,
    }
  ];

  const [data, setData] = useState<CommentsInfo[] | null>(null);
  const [open, setOpen] = useState(false);
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(0);


  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/comments?skip=${skip}&limit=${limit}`);
      const initialData = result.data.comments
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
          Comments
        </h3>
        {/* <button onClick={() => setOpen(true)}>
      Add new
    </button> */}
      </div>

      <CommentsDataTable columns={columns} rows={data} slug='comments'
      pageSize={limit}
      onPageChange={handlePageChange}
      />

      {open && <Add setOpen={setOpen} columns={columns} slug='comments' />}

    </div>
  )
}

export default Comments