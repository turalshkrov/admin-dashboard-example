import { TableProps } from "antd";
import { useAppDispatch } from "../../app/hooks";
import { deleteCategory } from "./categorySlice";
const dispatch = useAppDispatch()

export interface Category {
  _id?: string;
  categoryName: string;
  description?: string;
}

export interface CategoryState {
  list: Category[] | []; // -> null | any
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: Category | null;
}

export interface CategoryType {
  key: string;
  _id: string;
  categoryName: string;
  description?: string;
  // tags: string[];
}
