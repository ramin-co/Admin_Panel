import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../data/ProductsData";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../requsetMethod";

const ChartContainer = styled.div`
  display: flex;
  /* gap: 10px; */
`;

const Image=styled.img``

const Container = styled.div``;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.color === "delete" ? "red" : "blue")};
  background-color: #f7f7f7;
  cursor: pointer;
`;
const NewBtuu = styled.div`
  /* width: 100px;
  height: 100px; */
  padding: 3px 15px;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  background-color: teal;
`;
const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  color: gray;
  font-size: 30px;
  font-weight: 500;
`;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const action = {
    field: "actions",
    headerName: "ACTIONS",
    width: 150,
    renderCell: (params) => {
      return (
        <ChartContainer>
          <Button color="view">View</Button>
          <Button
            color="delete"
            onClick={() => handleDelete(params.row._id)}
            disabled={isFetching}
          >
            Delete
          </Button>
        </ChartContainer>
      );
    },
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/product/find");

        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [isFetching]);

  const handleDelete = async (id) => {
    try {
      console.log("id:", id);
      setIsFetching(true);
      const res = await userRequest.delete(`/product/${id}`);
      setIsFetching(false);
      console.log(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <ContainerTitle>
        <Image
          src="
./images/upload/product/image2.jpg"
        />
        <Title>Products</Title>
        <Link to="/products/new" style={{ textDecoration: "none" }}>
          <NewBtuu>New</NewBtuu>
        </Link>
      </ContainerTitle>
      <DataGrid
        style={{
          fontSize: "16px",
          padding: "20px",
          border: "1px solid lightgray",
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          borderRadius: "10px",
          margin: "0px 20px",
        }}
        rows={products}
        columns={columns.concat(action)}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[0]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Container>
  );
};

export default ProductsList;
