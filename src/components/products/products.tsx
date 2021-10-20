import {
    Box,
    Container,
} from '@chakra-ui/react';
import ProductView from './productView';
import { products, products2 } from '../../data';

function Products() {
    return (

        <Container
            maxW="container.xl"
            bg="#FFFFFF"
            borderRight="15px solid #ffa1b2"
            borderLeft="15px solid #ffa1b2"
            p={{
                base: "60px 20px 40px 20px",
                md:"60px 40px 40px 60px"
            }}
        >
            <Box mb="20">
                <ProductView
                    products={products}
                    header="Sandwiches"
                />
            </Box>
            <Box mb="20">
                <ProductView
                    products={products2}
                    header="Burgers"
                />
            </Box>
        </Container>
    );
}

export default Products;
