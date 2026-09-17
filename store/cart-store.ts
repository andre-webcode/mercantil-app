import { create } from "zustand";
import { ProductType } from "../types/product-type";
import { CartItem } from "../types/cart-type";

type CartState = {
    cart: CartItem[];
    addToCart: (product: ProductType) => void;
    decreaseCart: (productId: number) => void;
}
export const useCartStore = create<CartState>((set) => ({
    cart: [],

    addToCart: (product) => {

        set((state) => {

            const index = state.cart.findIndex(
                (item) => item.product.id === product.id
            );

            if (index !== -1) {
                const cart = [...state.cart];

                cart[index].quantity += 1;

                return { cart };
            }

            return {

                cart: [...state.cart,
                {
                    product,
                    quantity: 1
                },
                ],
            }
        })
    },

    decreaseCart: (productId) => {
        set((state) => {
          const cart = state.cart.map((item) => {
              if (item.product.id === productId) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }
      
              return item;
            })
            .filter((item) => item.quantity > 0);
      
          return { cart };
        });
      },

}));