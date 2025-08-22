import { createSlice } from "@reduxjs/toolkit";
import { setUserData } from "./UserDataSlice";

interface NavState {
  category: any[];
  catLoading: boolean;
  productLoading: boolean;
  product: any[];
  Order: any[];
  orderLoading: boolean;
  usersCount: number;
  allUsers: any[];
  warrantyClaims: any[];
  warrantyClaimsLoading: boolean;
}

const initialState: NavState = {
  category: [],
  catLoading: false,
  productLoading: false,
  product: [],
  Order: [],
  orderLoading: false,
  usersCount: 0,
  allUsers: [],
  warrantyClaims: [],
  warrantyClaimsLoading: false,
};

export const Admin = createSlice({
  name: "AdminData",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.category = action.payload;
    },
    setProductData: (state, action) => {
      state.product = action.payload;
    },
    setCatLoading: (state, action) => {
      state.catLoading = action.payload;
    },
    setProdLoading: (state, action) => {
      state.productLoading = action.payload;
    },
    setOrderData: (state, action) => {
      state.Order = action.payload;
    },
    setOrderLoading: (state, action) => {
      state.orderLoading = action.payload;
    },
    setUserDatacount: (state, action) => {
      state.usersCount = action.payload;
    },
    setAllusers: (state, action) => {
      state.allUsers = action.payload;
    },
    setWarrantyClaims: (state, action) => {
      state.warrantyClaims = action.payload;
    },
    setWarrantyClaimsLoading: (state, action) => {
      state.warrantyClaimsLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCategoryData,
  setCatLoading,
  setProdLoading,
  setProductData,
  setOrderData,
  setOrderLoading,
  setUserDatacount,
  setAllusers,
  setWarrantyClaims,
  setWarrantyClaimsLoading,
} = Admin.actions;

export const AdminReducer = Admin.reducer;
