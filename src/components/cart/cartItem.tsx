import React, { useEffect, useState } from 'react';
import {
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    Box,
    Text,
    Image,
    Td,
    Tr,
    Flex,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCart, update } from './cartSlice';
import { products } from '../../data';
import { Link } from 'react-router-dom';

interface ICartItem {
    item: any;
    removeItem: any;
}

function CartItem({ item, removeItem }: ICartItem) {
    const [inStock, setInStock] = useState<boolean>(true);
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        checkItemStockQty();
    });

    const cartItem = () => {
        return cart.filter(i => i.id === item.id);
    }

    const checkItemStockQty = () => {
        products[item.id - 1].quantity - cartItem()[0].orderQty === 0 && setInStock(false);

    }

    const updateQty = (id: number, qty: number) => {

        cart.map(item => {
            if (item.id === id) {

                const remainingQty = products[item.id - 1].quantity - qty;

                if (remainingQty === 0) {
                    setInStock(false);
                    return null;
                }
            }

            setInStock(true)

            return item;
        });

        dispatch(update({ id, qty }));
    }

    return (
        <Tr key={item.id}>
            <Td
                p="0"
            >
                <Flex>
                    <Box
                        display={{
                            base: "initial",
                            lg: "flex"
                        }}
                        alignItems="center"
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            maxW={{
                                base: "100%",
                                md: "200px"
                            }}
                            display="inline-block"
                            mr="5"
                            mb="5"
                        />
                        <Box
                            display="inline-block"
                            width={{
                                base: "100%",
                                md: "500px"
                            }}
                        >
                            <Text
                                fontSize="smaller"
                                color="#707070"
                            >
                                {item.company}
                            </Text>
                            <Text
                                fontSize="larger"
                                fontWeight="bold"
                                mb="5"
                            >{item.name}</Text>
                            <Text mb="5">{item.description}</Text>
                            <Flex
                                alignItems="center"
                            >
                                <Text 
                                    fontWeight="bold"
                                    mr="3"
                                >QTY</Text>
                                <NumberInput
                                    defaultValue={item.orderQty}
                                    min={1}
                                    max={inStock ? 100 : cartItem()[0].orderQty}
                                    size="md"
                                    onChange={(qty) => updateQty(item.id, parseInt(qty))}
                                    width="75px"
                                    mr="5"
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                <Flex>
                                    <Link to={`/product/${item.id}`}><small>View</small></Link>
                                    <Text>&nbsp;/&nbsp;</Text>
                                    <small onClick={() => removeItem(item.id)}>Remove</small>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Td>
            <Td
                isNumeric
                fontWeight="bold"
                width={{
                    base: "40%",
                    md: "initial"
                }}
                p="0"
            >
                <Box>
                    <Text>$ {item.price}</Text>
                </Box>
            </Td>
        </Tr>
    )
}

export default CartItem;
