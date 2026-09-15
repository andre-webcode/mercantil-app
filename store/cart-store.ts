import { create } from "zustand";
import { ProductType } from "../types/product-type";

type CartState = {
    cart: ProductType[];
    addToCart: (product: ProductType) => void;
}
export const useCartStore = create<CartState>((set) => ({
    cart: [],

    addToCart: (product) => {
        set((state) => ({
            cart: [...state.cart, product],
        }))
    },

}));