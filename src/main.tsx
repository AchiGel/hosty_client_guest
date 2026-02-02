import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Categories from "./pages/Categories.tsx";
import CategoryDetails from "./pages/CategoryDetails.tsx";
import SuccessRequest from "./pages/SuccessRequest.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<CategoryDetails />} />
      <Route path="/success" element={<SuccessRequest />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
