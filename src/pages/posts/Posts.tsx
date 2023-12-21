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
      editable: true,
      type: 'string',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.category || ''} ${params.row.title || ''}`,
    },
    {
      field: 'body',
      headerName: 'body',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'userId',
      headerName: 'userId',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'tags',
      headerName: 'tags',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'reactions',
      headerName: 'reactions',
      type: 'number',
      width: 110,
      editable: true,
    }
  ];

  const [data, setData] = useState<PostInfo[] | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://dummyjson.com/posts');
        setData(result.data.posts);
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
          Posts
        </h3>
        {/* <button onClick={() => setOpen(true)}>
        Add new
      </button> */}
      </div>

      <PostsDataTable columns={columns} rows={data} slug='posts' />

      {open && <Add setOpen={setOpen} columns={columns} slug='product' />}

    </div>
  )
}

export default Posts