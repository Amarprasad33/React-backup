import { Route, Routes } from "react-router-dom";
import DetailFood from "./components/DetailFood";
import ListFoods from "./components/ListFoods";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<ListFoods />} />
            <Route path="detail/:id" element={<DetailFood />} />
        </Routes>
    );
}

export default AdminRoutes;