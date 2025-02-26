import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Toast_Handelar from "../../Components/Toast_Handelar";

// Add Single products To Cart
export const AddProduct = createAsyncThunk(
  "AddProduct",
  async (Product_ID, { getState, rejectWithValue }) => {
    const State = getState();
    const { Token, _id } = State.User.RememberMe
      ? JSON.parse(localStorage.getItem("Token"))
      : JSON.parse(sessionStorage.getItem("Token"));

    try {
      const Data = await axios.post(
        `${process.env.REACT_APP_API_URL}/Cart/Add`,
        {
          User_Id: _id,
          Product_ID: Product_ID,
        },
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      return Data.data;
    } catch (err) {
      Toast_Handelar("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

// Delete Single products From Cart
export const DeleteProduct = createAsyncThunk(
  "DeleteProduct",
  async (Product_ID, { rejectWithValue, getState }) => {
    const State = getState();
    const { Token, _id } = State.User.RememberMe
      ? JSON.parse(localStorage.getItem("Token"))
      : JSON.parse(sessionStorage.getItem("Token"));

    try {
      const Data = await axios.post(
        `${process.env.REACT_APP_API_URL}/Cart/Delete`,
        {
          User_Id: _id,
          Product_ID: Product_ID,
        },
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      return Data.data;
    } catch (err) {
      Toast_Handelar("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

// update single product in cart
export const UpdateCount = createAsyncThunk(
  "UpdateCount",
  async (action, { rejectWithValue, getState }) => {
    const State = getState();
    const { Token, _id } = State.User.RememberMe
      ? JSON.parse(localStorage.getItem("Token"))
      : JSON.parse(sessionStorage.getItem("Token"));

    try {
      const Data = await axios.post(
        `${process.env.REACT_APP_API_URL}/Cart/UpdateCount?type=${action.type}`,
        {
          User_Id: _id,
          Product_ID: action._id,
        },
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      return Data.data;
    } catch (err) {
      Toast_Handelar("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

// Get all products in Cart
export const GetCartProducts = createAsyncThunk(
  "GetCartProducts",
  async (arg, { getState, rejectWithValue }) => {
    const State = getState();
    const { Token, _id } = State.User.RememberMe
      ? JSON.parse(localStorage.getItem("Token"))
      : JSON.parse(sessionStorage.getItem("Token"));

    try {
      const Data = await axios.post(
        `${process.env.REACT_APP_API_URL}/Cart`,
        { User_Id: _id },
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      return Data.data;
    } catch (err) {
      Toast_Handelar("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    Loading: false,
    Cart: [],
  },
  reducers: {
    DeleteFromCartSync: (State, action) => {
      const NewCartState = [...State.Cart];
      const SingleProduct = NewCartState.filter(
        (product) => product._id == action.payload
      )[0];
      const ProudactId = NewCartState.indexOf(SingleProduct);
      NewCartState.splice(ProudactId, 1);
      State.Cart = [...NewCartState];
    },
    HandleIncrement: (State, action) => {
      const NewCartState = [...State.Cart];
      const SingleProduct = NewCartState.filter(
        (product) => product._id == action.payload
      )[0];

      if (SingleProduct !== undefined) {
        const ProudactId = NewCartState.indexOf(SingleProduct);

        NewCartState[ProudactId] = {
          ...NewCartState[ProudactId],
          Count: NewCartState[ProudactId].Count + 1,
        };
        State.Cart = [...NewCartState];
      }
    },
    HandleDecrement: (State, action) => {
      const NewCartState = [...State.Cart];
      const SingleProduct = NewCartState.filter(
        (product) => product._id == action.payload
      )[0];
      if (SingleProduct !== undefined) {
        const ProudactId = NewCartState.indexOf(SingleProduct);
        if (NewCartState[ProudactId].Count > 1) {
          NewCartState[ProudactId] = {
            ...NewCartState[ProudactId],
            Count: NewCartState[ProudactId].Count - 1,
          };
          State.Cart = [...NewCartState];
        }
      }
    },
    HandleAddProduct: (State, action) => {
      const NewCartState = [...State.Cart];
      NewCartState.push({ ...action.payload.product, Count: 1 });
      State.Cart = [...NewCartState];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetCartProducts.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(GetCartProducts.fulfilled, (State, action) => {
      State.Loading = false;
      State.Cart = action.payload.Data;
    });
    builder.addCase(GetCartProducts.rejected, (State, action) => {
      State.Loading = false;
    });
  },
});

export const {
  DeleteFromCartSync,
  HandleDecrement,
  HandleIncrement,
  HandleAddProduct,
} = CartSlice.actions;

export default CartSlice.reducer;
