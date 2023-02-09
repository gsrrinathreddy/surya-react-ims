import { Typography, CircularProgress } from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { fetchproducts } from "../../features/products/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  console.log("users: ", product.products);
  return (
    <>
      List of products
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Id </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Title</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.loading && <CircularProgress />}
            {!product.loading && product.error ? (
              <Typography>Error: {product.error}</Typography>
            ) : null}
            {!product.loading && product.products.length
              ? product.products.map((product) => {
                  return (
                    <TableRow
                      key={product.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{product.id}</TableCell>
                      <TableCell align="left">{product.title}</TableCell>
                      <TableCell align="left">{product.description}</TableCell>
                      <TableCell align="left">{product.price}</TableCell>
                    </TableRow>
                  );
                })
              : null}

            <Button color="inherit" onClick={() => dispatch(fetchproducts())}>
              fetch Products{" "}
            </Button>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
