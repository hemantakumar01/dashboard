import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";

import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/Add/Add";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avater",
    headerName: "Avater",
    width: 120,
    renderCell: (row) => <img src={row.row.img || "/noavatar.png"} alt="" />,
    type: "string",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
  },
];
const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <DataTable
        slug={"users"}
        rows={userRows}
        columns={columns}
        setOpen={setOpen}
      />
      {open && (
        <Add slug="user" setOpen={setOpen} columns={columns} title="Add User" />
      )}
    </div>
  );
};

export default Users;
