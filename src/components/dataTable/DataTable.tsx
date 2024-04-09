import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import "./dataTable.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DataTable = (props: Props) => {
  const navigate = useNavigate();
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <div className="action">
        <button
          style={{ color: "green" }}
          onClick={() => {
            navigate(`/${props.slug}/${params.row.id}`);
          }}
        >
          <EditCalendarIcon />
        </button>
        <button
          style={{ color: "red" }}
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    ),
  };

  const handleDelete = (id: string) => {
    // async function
    console.log(id);
  };
  return (
    <div className="dataTable">
      <div className="texts">
        <h1>{props.slug.toUpperCase()}</h1>
        <button onClick={() => props.setOpen(true)}>Add {props.slug}</button>
      </div>
      <div className="table">
        <DataGrid
          className="dataGride"
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default DataTable;
