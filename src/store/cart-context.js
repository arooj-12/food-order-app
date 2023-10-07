import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => item,
    removeItem: (id) => {},
    clearCart: () => {}
});

export default CartContext;