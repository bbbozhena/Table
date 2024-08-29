import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  "Tracking ID": number;
  "Product Image": string;
  "Product Name": string;
  Customer: string;
  Date: string;
  Amount: number;
  "Payment Mode": string;
  Status: "Delivered" | "Cancelled" | "Process";
};

type ProductsState = {
  products: Product[];
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
};

const initialState: ProductsState = {
  products: [],
  searchQuery: "",
  currentPage: 1,
  itemsPerPage: 10,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product["Tracking ID"] !== action.payload
      );
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {
  setProducts,
  deleteProduct,
  setSearchQuery,
  setCurrentPage,
  setItemsPerPage,
} = productsSlice.actions;

export default productsSlice.reducer;
