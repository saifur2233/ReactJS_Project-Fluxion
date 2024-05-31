import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={routes}></RouterProvider>
            <Toaster></Toaster>
        </div>
    )
}