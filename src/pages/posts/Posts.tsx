import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PostInfo } from '../../interfaces/interface';
import PostsDataTable from '../../components/dataTables/postsDataTable/PostsDataTable';
import Add from '../../components/add/Add';

const Posts = () => {

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
      field: 'body',
      headerName: 'body',
      type: 'string',
      width: 150,
      editable: false,
    },
    {
      field: 'userId',
      headerName: 'userId',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'tags',
      headerName: 'tags',
      type: 'string',
      width: 110,
      editable: false,
    },
    {
      field: 'reactions',
      headerName: 'reactions',
      type: 'number',
      width: 110,
      editable: false,
    }
  ];

  const [data, setData] = useState<PostInfo[] | null>(null);
  const [open, setOpen] = useState(false);
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(0);

  const fetchData = async () => {
    try {
      const result = await axios(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`);
      const initialData = result.data.posts;
      const count = result.data.total;
      setTotalCount(count);
      setLimit(totalCount);
      setData(initialData);
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
          Posts
        </h3>
        {/* <button onClick={() => setOpen(true)}>
        Add new
      </button> */}
      </div>

      <PostsDataTable 
      columns={columns} 
      rows={data} 
      slug='posts'
      onPageChange={handlePageChange}
      pageSize={limit} />

      {open && <Add setOpen={setOpen} columns={columns} slug='product' />}

    </div>
  )
}

export default Posts