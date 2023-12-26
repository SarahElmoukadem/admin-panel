import {
    DataGrid,
    GridColDef,
    GridToolbar,
} from '@mui/x-data-grid';

import './dataTable.scss';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import axios from 'axios';
import { useState } from 'react';
import { Todo } from '../../../interfaces/interface';
import { useLocalStorage } from '../../../hooks/custmHooks';

type Props = {
    columns: GridColDef[],
    rows: Todo[],
    slug: string,
}

const TodosDataTable = (props: Props) => {
    const [rows, setRows] = useState(props.rows);
    const { getItem, setItem } = useLocalStorage('Todos Data');

    const handleDelete = (id: number) => {
        axios.delete(`https://dummyjson.com/todos/${id}`)
            .then(() => {
                const updatedRows = rows.filter(item => item.id !== id)
                setItem(updatedRows);
                setRows(updatedRows)
            })
            .catch((error) => {
                console.error('Error deleting Todos data', error)
            })
    }
    const initialRows = getItem() || props.rows;
  
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 110,
        renderCell: (params) => {
            return (
                <div className='action'>
                    <Link to={`/todos/${params.row.id}`}>
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

export default TodosDataTable