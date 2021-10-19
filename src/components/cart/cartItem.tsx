import React, { useState } from 'react';
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

interface ICartItem {
    item: any;
    removeItem: any;
}

function CartItem({ item, removeItem }: ICartItem) {
    const [inStock, setInStock] = useState<boolean>(true);
    const [qtyInput, setQtyInput] = useState<number>();
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const updateQty = (id: number, qty: number) => {

        cart.map(item => {
            if (item.id === id) {

                const remainingQty = products[item.id - 1].quantity - qty;

                if (remainingQty === 0) {
                    setInStock(false);
                    setQtyInput(qty);
                    return null;
                }
            }

            setInStock(true)
            setQtyInput(10);

            return item;
        });

        dispatch(update({ id, qty }));
    }

    return (
        <Tr key={item.id}>
            <Td>
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
                            <NumberInput
                                defaultValue={item.orderQty}
                                min={1}
                                max={inStock ? 100 : qtyInput}
                                size="xs"
                                onChange={(qty) => updateQty(item.id, parseInt(qty))}
                                focusBorderColor={inStock ? "initial" : "1px solid red"}
                                outline={inStock ? "initial" : "1px solid red"}
                                width="65px"
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <small onClick={() => removeItem(item.id)}>remove</small>
                            {!inStock && <p>Oops! We are out of stock.</p>}
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
            >
                <Box>
                    <Text>$ {item.price}</Text>
                </Box>
            </Td>
        </Tr>
    )
}

export default CartItem;
