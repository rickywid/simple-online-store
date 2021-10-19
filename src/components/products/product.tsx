import {
    Container,
    Divider
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import ProductItemDetail from './productItemDetail';
import ProductRelatedItems from './productRelatedItems';

interface ParamTypes {
    product_id: string
}

function Product() {
    const { product_id } = useParams<ParamTypes>();

    return (
        <Container
            maxW="container.xl"
            bg="#FFFFFF"
            borderRight="15px solid #ffa1b2"
            borderLeft="15px solid #ffa1b2"
            p={{
                base: "60px 10px 40px 10px",
                md: "60px 40px 40px 60px"
            }}
        >
            <ProductItemDetail productId={product_id} />
            <Divider
                mt="10"
                mb="10"
            />
            <ProductRelatedItems />
        </Container>
    );
}

export default Product;
