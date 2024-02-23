import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { Category, CategoryState } from "./types";
import http from "../../common/utils/api";

const initialState: CategoryState = {
  list: [],
  status: "idle",
  error: null,
  selected: null
}

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await http.get("/categories"); 
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id: string) => {
    const response = await http.delete(`/categories/${id}`);
    console.log(response);
    return response.data;
  }
);

export const createCategory = createAsyncThunk(
  "category/careateCategory",
  async (category: Category) => {
    const response = await http.post("/categories", category);
    console.log(response);  
    return response.data;
  }
)

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded",
        state.list = action.payload
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.list = state.list.filter(category => category._id !== action.payload._id);
      })
  },
})

export default categorySlice.reducer;