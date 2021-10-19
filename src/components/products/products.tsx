import { Link } from 'react-router-dom';
import {
    Box,
    SimpleGrid,
    Image,
    Heading,
    Container,
    Center
} from '@chakra-ui/react';
import ProductView from './productView';
import { products, products2, IProduct } from '../../data';

function Products() {
    return (

        <Container
            maxW="container.xl"
            bg="#FFFFFF"
            borderRight="15px solid #ffa1b2"
            borderLeft="15px solid #ffa1b2"
            p="60px 40px 40px 60px"
        >
            <Box>
                <ProductView
                    products={products}
                    header="Sandwiches"
                />
            </Box>
            <Box>
                <ProductView
                    products={products2}
                    header="Burgers"
                />
            </Box>
        </Container>
    );
}

export default Products;
