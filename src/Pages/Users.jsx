import SideBar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import UsersList from '../Components/UsersList';
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    width:100%;
    
`;
const UsersContainer=styled.div`
    flex:14;
`



const Users = () => {
  return <Container>
    <SideBar/>
    <UsersContainer>
    <Navbar/>
    <UsersList/>
    </UsersContainer>
  </Container>;
};

export default Users;
