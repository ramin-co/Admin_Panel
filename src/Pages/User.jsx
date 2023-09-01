import { styled } from "styled-components";
import SideBar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Chart from "../Components/Chart";
import UsersList from "../Components/UsersList";
import UserTransections from "../Components/UserTransections";

const Container = styled.div`
  display: flex;
`;
const UserContainer = styled.div`
  flex: 14;
`;
const Top = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;
const Left = styled.div`
  border: 1px solid gray;
  flex: 1;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  position: relative;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: gray;
  margin: 20px 0px;
`;
const UserDetails = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  /* align-items: center; */
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: gray;
  margin-bottom: 20px;
`;
const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const ItemKey = styled.div`
  color: gray;
  font-size: 14px;
`;
const ItemValue = styled.div`
  font-weight: 500;
`;

const Right = styled.div`
  flex: 2;
`;

const Button = styled.div`
  font-weight: 500;

  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 10px 0px 0px;
  padding: 5px 10px;
  /* border: 1px solid purple; */
  color: purple;
  background-color: #efeff4;
  cursor: pointer;
`;
const Bottom = styled.div``;

const User = () => {
  return (
    <Container>
      <SideBar />
      <UserContainer>
        <Navbar />
        <Top>
          <Left>
            <Title>Information</Title>
            <UserDetails>
              <Image src="/images/users/image1.jpg" />
              <Details>
                <Name>Ramin ghasemi</Name>
                <ItemDetails>
                  <ItemKey>Email:</ItemKey>
                  <ItemValue>Test@email.com</ItemValue>
                </ItemDetails>
                <ItemDetails>
                  <ItemKey>Number:</ItemKey>
                  <ItemValue>+98 916 727 3453</ItemValue>
                </ItemDetails>
                <ItemDetails>
                  <ItemKey>Address:</ItemKey>
                  <ItemValue>Khw mis avn1</ItemValue>
                </ItemDetails>
                <ItemDetails>
                  <ItemKey>Country:</ItemKey>
                  <ItemValue>IRI</ItemValue>
                </ItemDetails>
              </Details>
            </UserDetails>
            <Button>Edite</Button>
          </Left>
          <Right>
            <Chart title="6 month " aspect={3 / 1} />
          </Right>
        </Top>
        <Bottom>
            <UserTransections/>
        </Bottom>
      </UserContainer>
    </Container>
  );
};

export default User;
