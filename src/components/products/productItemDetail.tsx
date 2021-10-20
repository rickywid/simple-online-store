import {
    Box,
    Button,
    Heading,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
    Image,
    Alert,
    AlertIcon
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
    const { id, company, name, description, quantity, price, image } = product;
    const [qty, setQty] = useState<any>(1);
    const [inStock, setInStock] = useState<boolean>(true);
    const [qtyInput, setQtyInput] = useState<number>();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
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
        setShowAlert(true);
        setShowError(false);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    const itemInCart = () => {
        return cart.filter(item => item.id === parseInt(productId));
    }

    const remainingQty = () => {

        return products[id - 1].quantity - qty;
    }

    const updateQty = (id: number, qty: number) => {
        if (remainingQty() < 1) {
            setInStock(false);
            setShowError(true);
            setQtyInput(qty);

        } else {
            setInStock(true);
            setQty(qty);
            setQtyInput(1000);
        }

        dispatch(update({ id, qty }));
    }

    return (
        <Box
            display={{
                base: "initial",
                lg: "flex"
            }}
        >
            <Box p="8" flex="1">
                <Image src={image} alt={name} />
            </Box>
            <Box flex="1">
                <Box p="8" flex="1">
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
                    <Text
                        fontSize="smaller"
                        color="#707070"
                    >
                        {company}
                    </Text>
                    <Heading as="h3" size="lg" mb={5}>${price}</Heading>
                    <Text mb="3">{description}</Text>
                    <Text mb="3" fontWeight="bold">QTY: {quantity}</Text>
                    <Text fontSize="smaller">Product no. {id}</Text>
                </Box>
                <Box position="relative">
                    <Box
                        display={{
                            base: "initial",
                            lg: "flex"
                        }}
                        justifyContent={{
                            md: "space-between"
                        }}
                        mb="5"
                    >
                        <Box
                            width={{
                                base: "100%",
                                lg: "48%"
                            }}
                            mb={{
                                base: "3",
                            }}
                        >
                            <Button
                                onClick={addToCart}
                                isDisabled={itemInCart().length > 0}
                                colorScheme="teal"
                                width={{
                                    base: "100%",
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Box>
                        <Box
                            width={{
                                base: "100%",
                                lg: "48%"
                            }}
                        >
                            <Link style={{ width: "100%" }} to={`/products`}
                            ><Button
                                colorScheme="blue"
                                width={{
                                    base: "100%",
                                }}
                            >See more products</Button>
                            </Link>
                        </Box>
                    </Box>
                    <NumberInput
                        defaultValue={1}
                        value={qty}
                        min={1}
                        max={inStock ? 1000 : qtyInput}
                        onChange={(qty) => updateQty(id, parseInt(qty))}
                        focusBorderColor={inStock ? "initial" : "1px solid red"}
                        outline={inStock ? "initial" : "1px solid red"}
                        mb="5"
                        mt="5"
                        isDisabled={itemInCart().length > 0}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {!inStock && showError && (
                        <Alert
                            status="error"
                            className="animate__animated animate__fadeInUp"
                            position="absolute"
                        >
                            <AlertIcon />
                            Max quantity amount reached.
                        </Alert>
                    )}
                    {showAlert && (
                        <Alert status="success" className="animate__animated animate__fadeInUp">
                            <AlertIcon />
                            Successfully added to cart
                        </Alert>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default ProductItemDetail;