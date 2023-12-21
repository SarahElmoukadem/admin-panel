import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { IoMdClose } from "react-icons/io";
import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

type Props = {
  slug: string,
  columns: GridColDef[],
  setOpen: Dispatch<SetStateAction<boolean>>
}


const Add = (props: Props) => {

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  axios.post(`https://dummyjson.com/products/add`);
  console.log('');
  
}

  return (
    <div className='add-modal'>
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          <IoMdClose />
        </span>
        <h3>
          Add new {props.slug}
        </h3>

        <form onSubmit={handleSubmit}>
          {props.columns.filter(item => item.field !== 'id')

            .map(col => (
              <div className="item" key={col.field}>
                <div>
                  <label>
                    {col.headerName}
                  </label>
                  <input type={col.type} placeholder={col.headerName} />
                </div>

              </div>
            ))}
            <button>Send</button>
        </form>
      </div>

    </div>
  )
}

export default Add