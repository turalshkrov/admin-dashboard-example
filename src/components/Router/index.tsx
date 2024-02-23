import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layout/AppLayout";
import List from "../../features/categories/list";
import { Create } from "../../features/categories/Create";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout content="Home" />} />
        <Route path="/categories" element={<AppLayout content={<List />} />}/>
        <Route path="categories/create" element={<AppLayout content={<Create />} />} />
      </Routes>
    </>
  );
};

export default Router;