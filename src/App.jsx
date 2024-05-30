import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";

export default function App() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={routes}></RouterProvider>

        </div>
    )
}