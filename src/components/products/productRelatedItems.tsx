import { Heading } from '@chakra-ui/react';
import { products, IProduct } from '../../data';
import ProductView from './productView';

const ProductRelatedItems = () => {

    const getRelatedProducts = () => {
        let randomId: number[] = [];

        for (let i = 0; i < 6; i++) {
            randomId.push(Math.floor(Math.random() * (39 - 1) + 1))
        }

        return products.filter(product => {
            return randomId.includes(product.id);
        });
    }

    return (
        <>
            <Heading
                as="h3"
                size="md"
                mb="100"
            >You might also like...</Heading>
            <ProductView
                products={getRelatedProducts()}
            />
        </>
    )
}

export default ProductRelatedItems;