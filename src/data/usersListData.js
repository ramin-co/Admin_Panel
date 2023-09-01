import { styled } from "styled-components";

const Name = styled.span`
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

const AdminButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  color: ${(props) => (props.color ? "green" : "red")};
  background-color: ${(props) => (props.color ? "lightgreen" : "#FFF9C9")};
  padding: 3px 7px;
  border-radius: 10px;
`;

export const columns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <Image src={params.row.img} />;
    },
  },
  {
    field: "username",
    headerName: "NAME",
    width: 150,
    renderCell: (params) => {
      return (
        <Container>
          {/* <Image src={params.row.img} /> */}
          {params.row.username}
        </Container>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  { field: "phone", headerName: "PHONE", width: 150 },

  {
    field: "isAdmin",
    headerName: "ISADMIN",
    renderCell: (params) => {
      return (
        <AdminButton color={params.row.isAdmin}>
          {`${params.row.isAdmin}`}
        </AdminButton>
      );
    },
    width: 180,
  },
  // { field: "isAdmin", headerName: "ISADMIN",,width: 150 },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 250,
  //   renderCell: (params) => {
  //     return <Staus color={params.row.status}>{params.row.status}</Staus>;
  //   },
  // },
];
