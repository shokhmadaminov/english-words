import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App } from "konsta/react"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <h1>Salom dunyo!</h1>
  }
])

function MyApp() {
  return (
    <App theme='material'>
      <RouterProvider router={router}></RouterProvider>
    </App>
  )
}

export default MyApp