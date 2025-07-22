import { createBrowserRouter, RouterProvider } from "react-router"
import ReactDOM from "react-dom/client"
import App from "./App"

import "./index.css"
import LoginPage from "./app/login/Login"
import Page from "./app/dashboard/Dashboard"

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/login", Component: LoginPage },
  { path: "/dashboard", Component: Page },
])

const root = document.getElementById("root")

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />)
