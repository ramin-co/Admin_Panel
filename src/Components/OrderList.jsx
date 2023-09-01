import { styled } from "styled-components";
import { columns } from "../data/ordersData";
import { DataGrid } from "@mui/x-data-grid";
import { publicRequest, userRequest } from "../requsetMethod";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  color: gray;
`;
const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.color === "delete" ? "red" : "blue")};
  background-color: #f7f7f7;
  cursor: pointer;
`;

const ChartContainer = styled.div`
  display: flex;
  /* gap: 10px; */
`;
const action = {
  field: "actions",
  headerName: "ACTIONS",
  width: 150,
  renderCell: () => {
    return (
      <ChartContainer>
        <Button color="view">View</Button>
        <Button color="delete">Delete</Button>
      </ChartContainer>
    );
  },
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/order/find");
        console.log(res.data);
        setOrders(
          res.data.map((d, index) => {
            d.id = index + 1;
            return d;
          })
        );
      } catch (error) {}
    };
    getOrders();
  }, []);

  return (
    <Container>
      <Title>Orders</Title>
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
        rows={orders}
        columns={columns.concat(action)}
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

export default OrderList;
