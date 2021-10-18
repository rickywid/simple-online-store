import {
    Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
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
        <Box>
            {cart.map(item => {
                return (
                    <CartItem
                        item={item}
                        removeItem={removeItem}
                    />
                )
            })}
            <p>total: {totalCost()}</p>
            <Button onClick={onOpen} isDisabled={cart.length ? false : true}>Place Order</Button>
            <Button onClick={clearCart}>Cancel Order</Button>

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
        </Box>
    );
}

export default Cart;
