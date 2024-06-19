import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './templates/Menu'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />
    },
    {
        path: "/login"
    },
    {
        path: "/contact"
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
