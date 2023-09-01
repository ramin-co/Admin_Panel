import { styled } from 'styled-components';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import OrderList from '../Components/OrderList';


const Container=styled.div`
    display: flex;
    
` 
const OrderContainer=styled.div`
    flex:14;
` 



const Order = () => {
    return ( <Container>
        <SideBar/>
        <OrderContainer>
            <Navbar/>
            <OrderList/>
        </OrderContainer>
    </Container> );
}
 
export default Order;