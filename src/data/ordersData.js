import { styled } from "styled-components";

const Title = styled.span`
  margin-left: 10px;
  margin-right: 2px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const columns = [
  { field: "id", headerName: "Id", width: 100 },
  {
    field: "customer",
    headerName: "CUSTOMER",
    width: 200,
    renderCell: (params) => {
      <Container>
        {/* <Image src={params.row.img} /> */}
        <Title>{params.row.customer}</Title>
      </Container>;
    },
  },
  {
    field: "amount",
    headerName: "AMOUNT",
    width: 150,
  },
  { field: "createdAt", headerName: "DATE", width: 200 },
  { field: "payment", headerName: "PAYMENTMETHOD", width: 150 },
  { field: "status", headerName: "STATUS", width: 200 },
];
