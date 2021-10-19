import {
    Box, Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr, useDisclosure
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { remove, selectCart, clear } from '../../components/cart/cartSlice';
import CartItem from './cartItem';

function Cart() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const totalCost = () => {
        let total = 0;

        cart.forEach((item) => {
            total += parseFloat(item.price) * item.orderQty;
        });

        return total.toFixed(2);
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const clearCart = () => {
        dispatch(clear([]));
    }

    const generateConfirmationNo = () => {

        /**
         * Number + String generator
         * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
         */

        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 20; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    return (
        <Container
            width={{
                base: "auto"
            }}
            maxW="container.xl"
            bg="#FFFFFF"
            borderRight={{
                base: "none",
                lg: "15px solid #ffa1b2"
            }}
            borderLeft={{
                base: "none",
                lg: "15px solid #ffa1b2"
            }}
            p={{
                base: "60px 10px 40px 10px",
                md: "60px 40px 40px 60px"
            }}
            minHeight="calc(100vh - 75px)"
            margin={{
                base: "0 15px",
                lg: "auto"
            }}
        >
            <Table
                variant="simple"
                mb="10"
            >
                <Thead>
                    <Tr>
                        <Th>Item</Th>
                        <Th isNumeric>Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {cart.map(item => {
                        return (
                            <CartItem
                                item={item}
                                removeItem={removeItem}
                            />
                        )
                    })}
                    <Tr>
                        <Td fontWeight="bold">
                            Total
                        </Td>
                        <Td isNumeric fontWeight="bold">
                            $ {totalCost()}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Box 
                textAlign="right"
                display={{
                    base: "flex",
                    sm: "inherit"
                }}
                justifyContent="space-between"
            >
                <Button
                    colorScheme="teal"
                    mr="4"
                    onClick={onOpen}
                    isDisabled={cart.length ? false : true}
                    width={{
                        base: "48%",
                        sm: "auto"
                    }}
                >
                    Place Order
                </Button>
                <Button
                    onClick={clearCart}
                    colorScheme="red"
                    width={{
                        base: "48%",
                        sm: "auto"
                    }}
                >
                    Cancel Order
                </Button>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your order has been placed.</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>This is your confirmation order #:</p>
                        {generateConfirmationNo()}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default Cart;
