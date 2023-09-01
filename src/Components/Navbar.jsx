import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { togle } from "../Redux/themReducer";

const Container = styled.div``;
const Wraper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  border-bottom: 1px solid lightgray;
`;
const Search = styled.div`
  border: 1px solid lightgray;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  &::placeholder {
    font-size: 12px;
  }
`;

const Counter=styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    color:white;
    background-color:red;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:-10px;
    right:-10px;
    font-size: 10px;
    font-weight: bold;
`
const Icon = styled.i`
  font-size: 18px;
  cursor: pointer;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  padding:20px;
  
`;
const Text = styled.span`
  margin-left: 3px;
  font-size: 14px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;


const Navbar = () => {
  const dispatch=useDispatch();
  const dark=useSelector(state=>state.them.dark)
  const user=useSelector(state=>state.user.currentUser);
  console.log(user,'navbar')
  return (
    <Container>
      <Wraper>
        <Search>
          <Input placeholder="Search..." />
          <Icon>
            <i class="bi bi-search"></i>
          </Icon>
        </Search>
        <Menu>
          <MenuItem>
           <Icon> <i class="bi bi-globe-americas"></i></Icon>
            <Text>English</Text>
          </MenuItem>
          <MenuItem>
          <Icon onClick={()=>dispatch(togle())}>
              {dark ? <i class="bi bi-brightness-high"></i>:<i class="bi bi-moon"></i>}
            </Icon>
          </MenuItem>
          <MenuItem>
            <Icon>
              <i class="bi bi-fullscreen-exit"></i>
            </Icon>
          </MenuItem>
          <MenuItem>
            <Icon>
              <i class="bi bi-bell"></i>
            </Icon>
            <Counter>1</Counter>
          </MenuItem>
          <MenuItem>
            <Icon>
              <i class="bi bi-chat-left"></i>
            </Icon>
            <Counter>1</Counter>
          </MenuItem>
          <MenuItem>
            <Icon>
              <i class="bi bi-list-ul"></i>
            </Icon>
           
          </MenuItem>
          <MenuItem>
            <Image src={user.img ? user.img : '/images/profile.png'} />
          </MenuItem>
          <MenuItem>
            <Icon>
              <i class="bi bi-gear"></i>
            </Icon>
          </MenuItem>
        </Menu>
      </Wraper>
    </Container>
  );
};

export default Navbar;
