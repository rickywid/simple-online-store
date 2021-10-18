
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ICart {
    cart: {
        id: number;
        company: string;
        name: string;
        description: string;
        orderQty: number;
        price: string;
        image: string;
    }[]
}

// initial state 
const initialState: ICart = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {

            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        update: (state, action: PayloadAction<{ id: number, qty: number }>) => {

            const { id, qty } = action.payload;
            
            state.cart = state.cart.map(item => {
                if (item.id === id) { item.orderQty = qty; }
                return item;
            });
        },
        clear: (state, action: PayloadAction<[]>) => {
            state.cart = action.payload;
        }
    }
});

export const selectCart = (state: RootState) => state.cart.cart;
export const { add, remove, update, clear } = cartSlice.actions;
export default cartSlice.reducer;
