import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/Add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avater",
    headerName: "Avater",
    width: 120,
    renderCell: (row) => <img src={row.row.img || "/noavatar.png"} alt="" />,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "color",
    headerName: "Colour",

    editable: true,
  },
  {
    field: "producer",
    headerName: "Brand",
    type: "number",

    editable: true,
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",

    editable: true,
    width: 150,
  },
  {
    field: "inStock",
    headerName: "Stock",
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <DataTable
        slug="products"
        rows={products}
        columns={columns}
        setOpen={setOpen}
      />
      {open && (
        <Add
          setOpen={setOpen}
          slug="product"
          columns={columns}
          title="Add Products"
        />
      )}
    </div>
  );
};

export default Products;
