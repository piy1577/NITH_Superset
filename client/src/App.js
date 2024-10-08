import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/tpo/Login";
import Register from "./components/tpo/Register";
import CompanyLanding from "./pages/CompanyLanding";

const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
        path: "/company",
        children: [{ index: true, element: <CompanyLanding /> }],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
