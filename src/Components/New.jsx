import SideBar from './Sidebar';
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Container=styled.div``;


const NewContainer=styled.div``
const Top=styled.div``
const Bottom=styled.div``
const Left=styled.div``
const Right=styled.div``
const Title=styled.h1`
    color:gray;
    font-style: 20px;
    font-weight: 500;
`




const New = () => {
    return ( <Container>
        <SideBar />
        <NewContainer>
            <Navbar/>
            <Top>
                <Title>Add new Product</Title>
            </Top>
            <Bottom>
                <Left>left</Left>
                <Right>right</Right>
            </Bottom>
        </NewContainer>
    </Container> );
}
 
export default New;