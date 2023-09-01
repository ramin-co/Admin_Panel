import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark, light, togle } from "../Redux/themReducer";
import { remove } from "../Redux/UserRedux";

const Container = styled.div`
  min-height: 100vh;
  flex: 2;
  border-bottom: 0.1px solid lightgray;
  border-right: 0.1px solid lightgray;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* height:30px; */
`;
const ItemText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #61677a;
`;
const Hr = styled.hr`
  border: 0.1px solid lightgray;
`;
const Logo = styled.h1`
  font-size: 25px;
  color: blue;
  font-weight: bold;
  cursor: pointer;
`;
const Center = styled.div``;
const Icon = styled.i`
  margin-right: 10px;
  color: #0066cc;
`;
const List = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
const ListItem = styled.li`
  padding: 7px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f5f5f5;
    transition: all 0.3s ease-in-out;
  }
  margin: 0px 5px;
`;
const MenuTitle = styled.h1`
  font-size: 12px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 5px;
  color: lightgray;
  margin-left: 5px;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
`;

const ThemColor = styled.div`
  background-color: ${(props) => props.color};
  width: 14px;
  height: 14px;
  border: 0.5px solid black;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
`;

const SideBar = () => {
  const dispatch = useDispatch();
  // const darkthem = useSelector((props) => props.them.dark);
  const navigate = useNavigate();

  return (
    <Container>
      <Top>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo> raminadmin</Logo>
        </Link>
      </Top>
      <Hr />
      <Center>
        <List>
          <MenuTitle>MAIN</MenuTitle>
          <ListItem>
            <Icon>
              <i className="bi bi-menu-button-wide"></i>
            </Icon>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ItemText> Dashbord</ItemText>
            </Link>
          </ListItem>
          <MenuTitle>Lists</MenuTitle>
          <ListItem>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <Icon>
                <i className="bi bi-people"></i>
              </Icon>
              <ItemText> Users</ItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Icon>
                <i className="bi bi-card-list"></i>
              </Icon>

              <ItemText> Products</ItemText>
            </Link>
          </ListItem>
          <Link to='/orders' style={{ textDecoration: "none" }}>
            <ListItem>
              <Icon>
                <i className="bi bi-card-checklist"></i>
              </Icon>
              <ItemText> Orders</ItemText>
            </ListItem>
          </Link>
          <ListItem>
            <Icon>
              <i className="bi bi-bus-front-fill"></i>
            </Icon>
            <ItemText> Delivery</ItemText>
          </ListItem>
          <MenuTitle>USEFUL</MenuTitle>
          <ListItem>
            <Icon>
              <i className="bi bi-card-checklist"></i>
            </Icon>
            <ItemText> Stats</ItemText>
          </ListItem>
          <ListItem>
            <Icon>
              <i className="bi bi-bell"></i>
            </Icon>
            <ItemText> Notifications</ItemText>
          </ListItem>
          <MenuTitle>SERVICES</MenuTitle>

          <ListItem>
            <Icon>
              <i className="bi bi-bandaid"></i>
            </Icon>
            <ItemText> Systems</ItemText>
          </ListItem>

          <ListItem>
            <Icon>
              <i className="bi bi-printer"></i>
            </Icon>
            <ItemText> Logs</ItemText>
          </ListItem>
          <ListItem>
            <Icon>
              <i className="bi bi-gear"></i>
            </Icon>
            <ItemText> settings</ItemText>
          </ListItem>
          <MenuTitle>USER</MenuTitle>

          <ListItem>
            <Icon>
              <i className="bi bi-person-bounding-box"></i>
            </Icon>
            <ItemText> Profile</ItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              dispatch(remove());
              navigate("/");
            }}
          >
            <Icon>
              <i className="bi bi-box-arrow-left"></i>
            </Icon>
            <ItemText> LogOute</ItemText>
          </ListItem>
          <MenuTitle>THEME</MenuTitle>
          <ListItem>
            <ThemColor color={"white"} onClick={() => dispatch(light())} />
            <ThemColor color={"black"} onClick={() => dispatch(dark())} />
          </ListItem>
        </List>
      </Center>
    </Container>
  );
};

export default SideBar;
