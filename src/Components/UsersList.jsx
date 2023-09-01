import { styled } from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

import { rows, columns } from "../data/usersListData";
import { Link } from "react-router-dom";
import { userRequest } from "../requsetMethod";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
`;
const ActionButton = styled.button`
  border: 1px solid gray;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: ${(props) => (props.color === "view" ? "lightblack" : "#FF6666")};
  cursor: pointer;
  &:disabled{
    cursor:not-allowed;
    color:white;
  }
`;
const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  color: gray;
  font-size: 30px;
  font-weight: 600;
`;
const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.div`
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

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const action = [
    {
      field: "action",
      headField: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <ActionContainer>
            <ActionButton color={"view"}>View</ActionButton>
            <ActionButton
              color={"delete"}
              disabled={isFetching}
              onClick={() => {
                handleDelete(params.row._id, params.row.username);
              }}
            >
              Delete
            </ActionButton>
          </ActionContainer>
        );
      },
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/user/find");
        setUsers(res.data);
      } catch (error) {}
    };
    getUsers();
  }, [isFetching]);

  const handleDelete = async (id, name) => {
    try {
      setIsFetching(true);
      const res = await userRequest.delete(`/user/${id}`);
      setIsFetching(false);
      console.log(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Users</Title>
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          <Button>New</Button>
        </Link>
      </ContainerTitle>

      <DataGrid
        style={{
          fontSize: "16px",
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          padding: "20px",
        }}
        rows={users}
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
        getRowId={(row) => row._id}
      />
    </Container>
  );
};

export default UsersList;
