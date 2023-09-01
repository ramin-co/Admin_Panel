import { styled } from "styled-components";

const Title = styled.span`
  margin-left: 10px;
  margin-right: 2px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const columns = [
  { field: "_id", headerName: "Id", width: 250 },
  {
    field: "img",
    headerName: "Imgs",
    width: 100,
    renderCell: (params) => {
      return <Image src={params.row.img} />;
    },
  },

  {
    field: "title",
    headerName: "Title",
    width: 200,
    renderCell: (params) => {
      <Container>
        <Title>{params.row.title}</Title>
      </Container>;
    },
  },
  {
    field: "price",
    headerName: "PRICE",
    width: 130,
  },
  { field: "catogeries", headerName: "CATOGERY", width: 200 },
  { field: "size", headerName: "SIZE", width: 100 },
  { field: "color", headerName: "COLOR", width: 100 },
];
