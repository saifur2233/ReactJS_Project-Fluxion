import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Team from "../Pages/Team/Team";
import Contact from "../Pages/Contacts/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import AdminLogin from "../Pages/Auth/AdminLogin";
import AdminRegistration from "../Pages/Auth/AdminRegistration";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AllMessage from "../Pages/Dashboard/AllMessage";
import AddService from "../Pages/Dashboard/AddService";
import AllServices from "../Pages/Dashboard/AllServices";
import Blogs from "../Pages/Blogs/Blogs";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://oitech-server.vercel.app/api/v1/services/${params.id}`
                    ),
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/portfolio",
                element: <Portfolio></Portfolio>,
            },
            {
                path: "/team",
                element: <Team></Team>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/admin/login",
                element: <AdminLogin></AdminLogin>,
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },

        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/admin/register",
                element: (
                    <PrivateRoute>
                        <AdminRegistration></AdminRegistration>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/message",
                element: (
                    <PrivateRoute>
                        <AllMessage></AllMessage>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/addService",
                element: (
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/services",
                element: (
                    <PrivateRoute>
                        <AllServices></AllServices>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
