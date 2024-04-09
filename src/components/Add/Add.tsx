import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  columns: GridColDef[];
  slug: string;
  title: string;
};
const Add = (props: Props) => {
  return (
    <div className="add">
      <div className="addContainer">
        <div className="modle">
          <span className="close" onClick={() => props.setOpen(false)}>
            X
          </span>
          <h3>{props.title}</h3>
        </div>
        <form action="">
          {props.columns
            .filter((item) => item.field !== "status" && item.field !== "id")
            .map((i, index) => (
              <div className="formContainer" key={index}>
                <label>{i.headerName}</label>
                <input type={i.type} placeholder={i.headerName} />
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};

export default Add;
