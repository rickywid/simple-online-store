import { 
    Box, 
    Button, 
    Divider, 
    Flex, 
    Heading, 
    NumberDecrementStepper, 
    NumberIncrementStepper, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    Text, 
    Image 
} from "@chakra-ui/react";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks';
import { add, update } from '../cart/cartSlice';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../cart/cartSlice';
import { products, IProduct } from '../../data';

interface IProps {
    productId: string;
}

const ProductItemDetail = ({ productId }: IProps) => {
    const product: IProduct = products[parseInt(productId) - 1];
    const { id, company, name, description, quantity, price, addons, image } = product;
    const [qty, setQty] = useState<any>(1);
    const [inStock, setInStock] = useState<boolean>(true);
    const [qtyInput, setQtyInput] = useState<number>();
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);

    const addToCart = () => {

        const data = {
            id,
            company,
            name,
            description,
            orderQty: qty,
            price,
            image
        }

        dispatch(add(data));
    }

    const itemInCart = () => {
        return cart.filter(item => item.id === parseInt(productId)).length > 0;
    }

    const updateQty = (id: number, qty: number) => {

        const remainingQty = products[id - 1].quantity - qty;

        if (remainingQty < 1) {
            setInStock(false);
            setQtyInput(qty);

        } else {
            setInStock(true);
            setQty(qty);
            setQtyInput(10);
        }

        dispatch(update({ id, qty }));
    }

    return (
        <Flex>
            <Box p="8" flex="1">
                <Image src={image} alt={name} />
            </Box>
            <Box flex="1">
                <Box p="8" flex="1">
                    <p>{company}</p>
                    <Heading
                        as="h2"
                        size="xl"
                        display="inline-block"
                        background="linear-gradient(0deg, rgba(240,202,199,1) 0%, rgba(240,202,199,0) 153%)"
                        padding="15px 30px"
                        borderRadius="45px"
                        boxShadow="-8px 8px 0px -2px #cd9b97"
                        mb="10"
                    >
                        {name}
                    </Heading>
                    <Heading as="h3" size="lg" mb={5}>${price}</Heading>
                    <p>{description}</p>
                    <p>QTY: {quantity}</p>
                    <p>{addons}</p>
                </Box>
                <Divider
                    mt="1"
                    mb="1"
                />

                <Box p="8">
                    <Button onClick={addToCart} isDisabled={itemInCart()}>Add to Cart</Button>
                    <Link to={`/products`}><Button>See more products</Button></Link>
                    <NumberInput
                        defaultValue={1}
                        min={1}
                        max={inStock ? 1000 : qtyInput}
                        onChange={(qty) => updateQty(id, parseInt(qty))}
                        focusBorderColor={inStock ? "initial" : "1px solid red"}
                        outline={inStock ? "initial" : "1px solid red"}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {!inStock && <p>Oops! We are out of stock.</p>}

                    <Text>Product no. {id}</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default ProductItemDetail;