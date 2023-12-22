import {
    DataGrid,
    GridColDef,
    GridToolbar,
} from '@mui/x-data-grid';

import './commentsDataTable.scss';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import axios from 'axios';
import { useState } from 'react';
import { CommentsInfo } from '../../../interfaces/interface';
import { useLocalStorage } from '../../../hooks/custmHooks';

type Props = {
    columns: GridColDef[],
    rows: CommentsInfo[],
    slug: string,
}

const CommentsDataTable = (props: Props) => {
    const [rows, setRows] = useState(props.rows);

    const { getItem, setItem } = useLocalStorage('commentsData');


    const handleDelete = (id: number) => {
        axios.delete(`https://dummyjson.com/comments/${id}`)
            .then(() => {
                // Update local storage after successful deletion
                const updatedRows = rows.filter(item => item.id !== id);
                setRows(updatedRows);
                setItem(updatedRows);
            })
            .catch((error) => {
                console.error('Error deleting comment:', error);
                // Handle error, possibly show a user-friendly message
            });
    };
    const initialRows = getItem() || props.rows;

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 110,
        renderCell: (params) => {
            return (
                <div className='action'>
                    <Link to={`/comments/${params.row.id}`}>
                        <FaRegEye />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <GoTrash />
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='dataTable'>

            <DataGrid
                rows={initialRows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                // disableColumnFilter
                disableColumnSelector
                disableDensitySelector
            />

        </div>
    )
}

export default CommentsDataTable