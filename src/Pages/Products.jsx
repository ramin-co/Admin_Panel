import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import ProductsList from "../Components/ProductsList";


const Container=styled.div`
    display: flex;
    
`;
const ProductsContainer=styled.div`
    flex:14;
`;

const Products = () => {
    return (  <Container>
            <SideBar />
            <ProductsContainer>
                <Navbar />
                <ProductsList/>
            </ProductsContainer>
    </Container>);
}
 
export default Products;