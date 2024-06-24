import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import  "./users.scss";
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
      field: "img", headerName:"Avatar", width: 100,
      renderCell: (params)=>{
          return <img src={params.row.img || "/noavatar.png"} alt='' />
      }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 110,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },

];


const Users = () => {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
    </div>
  )
}

export default Users
