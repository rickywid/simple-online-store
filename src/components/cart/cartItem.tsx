import React, { useState } from 'react';
import {
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCart, update } from './cartSlice';
import { products } from '../../data';

interface ICartItem {
    item: any;
    removeItem: any;
}

function CartItem({item, removeItem}: ICartItem) {
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
        <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name} (x{item.orderQty}) - {item.price}</p>
            <NumberInput
                defaultValue={item.orderQty}
                min={1}
                max={inStock ? 10 : qtyInput}
                size="xs"
                onChange={(qty) => updateQty(item.id, parseInt(qty))}
                focusBorderColor={inStock ? "initial" : "1px solid red"}
                outline={inStock ? "initial" : "1px solid red"}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <small onClick={() => removeItem(item.id)}>remove</small>
            {!inStock && <p>Oops! We are out of stock.</p>}
        </div>
    )
}

export default CartItem;
