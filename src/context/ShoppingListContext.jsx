import React, { createContext, useState, useContext } from 'react';

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
    const [shoppingList, setShoppingList] = useState([]);

    const addToShoppingList = (items) => {
        setShoppingList(prev => {
            const newItems = items.filter(item => !prev.includes(item));
            return [...prev, ...newItems];
        });
    };

    const removeFromShoppingList = (item) => {
        setShoppingList(prev => prev.filter(i => i !== item));
    };

    const clearList = () => setShoppingList([]);

    return (
        <ShoppingListContext.Provider value={{ shoppingList, addToShoppingList, removeFromShoppingList, clearList }}>
            {children}
        </ShoppingListContext.Provider>
    );
};

export const useShoppingList = () => {
    const context = useContext(ShoppingListContext);
    if (!context) {
        throw new Error('useShoppingList must be used within a ShoppingListProvider');
    }
    return context;
};
